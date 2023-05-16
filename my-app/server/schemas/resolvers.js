const { AuthenticationError } = require('apollo-server-express');
const stripe = require('stripe')('sk_test_51MmU36BlbDJj83aqVaJWs5PDTguJH99jtkB4RgqyzH8QMDX1V9rV8QT9hLWXlPYUgKagrt0SZubeSuGwZsNoQokm00UfYAY4j5');

const { User, Product, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        categories: async () => {
            return await Category.find();
        },
        products: async (parent, { category, name }) => {
            const params = {};

            if (category) {
                params.category = category;
            }

            if (name) {
                params.name = {
                $regex: name
                };
            }

            return await Product.find(params).populate('category');
        },
        product: async (parent, { _id }) => {
            return await Product.findById(_id).populate('category');
        },
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'orders.products',
                    populate: 'category'
                });

                user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

                return user;
            }

            throw new AuthenticationError('Not logged in');
        },
        order: async (parent, { _id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'orders.products',
                    populate: 'category'
                });

                return user.orders.id(_id);
            }

            throw new AuthenticationError('Not logged in');

        },

        checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;
          
            try {
              const order = await Order.findById(args.orderId).populate('products');
            
              if (!order) {
                throw new Error('Order not found');
              }
            
              const { products } = order;
            
              const line_items = [];
            
              for (let i = 0; i < products.length; i++) {
                const product = await stripe.products.create({
                  name: products[i].name,
                  description: products[i].description,
                  images: [`${url}/images/${products[i].image}`],
                });
            
                const price = await stripe.prices.create({
                  product: product.id,
                  unit_amount: products[i].price * 100,
                  currency: 'usd',
                });
            
                line_items.push({
                  price: price.id,
                  quantity: 1,
                });
              }
            
              const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${url}/`,
              });
            
              // Redirect to the Stripe checkout session
              return {
                session: session.id,
                redirectUrl: session.url,
              };
            } catch (error) {
              throw new Error('Error in checkout');
            }
          }
           

        // checkout: async (parent, args, context) => {
        //     const url = new URL(context.headers.referer).origin;
        //     const order = new Order({ products: args.products });

            
        //     await order.populate('products');
        //     const { products } = order;

        //     const line_items = [];
        //     // const { product } = await order.populate('products');






        //     console.log(order)
        //     console.log (products)
        //     for (let i = 0; i < products.length; i++) {
        //       const product = await stripe.products.create({
        //         name: products[i].name,
        //         description: products[i].description,
        //         images: [`${url}/images/${products[i].image}`]
        //       });
      
        //       const price = await stripe.prices.create({
        //         product: product.id,
        //         unit_amount: products[i].price * 100,
        //         currency: 'usd',
        //       });
      
        //       line_items.push({
        //         price: price.id,
        //         quantity: 1
        //       });
        //     }
      
        //     const session = await stripe.checkout.sessions.create({
        //       payment_method_types: ['card'],
        //       line_items,
        //       mode: 'payment',
        //       success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        //       cancel_url: `${url}/`
        //     });
      
        //     return { session: session.id };
        //   }
        // checkout: async (parent, args, context) => {
        //     const url = new URL(context.headers.referer).origin;


        //     // const order = await Order.create({products: args.products[0]});
        //     // console.log(order)

        //     // const NewOrder= await Order.findOne({_id:order._id});
        //     const line_items = [];
        //     const products = []
        //     console.log(args.products)
        //       for ( let i = 0; i < args.products.length; i++){
        //         console.log(args.products[i])
        //          const product = await Product.findById(args.products[i]) 

        //          const { products } = await product.populate('product');

        //          console.log(products)
        //       }
        //     // const products = [
        //     //     {
        //     //      name : "watch ",
        //     //      description : "Hello World",
        //     //      images : "name.image ",
        //     //      id : 1,
        //     //      price : 10,

        //     //     }
        //     // ]


   
        //      console.log(products)
        //     //    console.log(products)
        //     for (let i = 0; i < products.length; i++) {
        //         // generate product id
        //         const product = await stripe.products.create({
        //             name: products[i].name,
        //             description: products[i].description,
        //             images: [`${url}/images/${products[i].image}`]
        //         });

        //         // generate price id using the product id
        //         const price = await stripe.prices.create({
        //             product: product.id,
        //             unit_amount: products[i].price * 100,
        //             currency: 'usd'
        //         });

        //         // add price id to the line items array
        //         line_items.push({
        //             price: price.id,
        //             quantity: 1
        //         });
        //     } 
        //        console.log(line_items)
        //     const session = await stripe.checkout.sessions.create({
        //         payment_method_types: ['card'],
        //         line_items,
        //         mode: 'payment',
        //         success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        //         cancel_url: `${url}/`
        //     });

        //     return { session: session.id };
        
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        addOrder: async (parent, { products }, context) => {
            
            
            if (context.user) {
                const order = new Order({ products });

                await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

                return order;
            }

            throw new AuthenticationError('Not logged in');
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }

            throw new AuthenticationError('Not logged in');
        },
        updateProduct: async (parent, { _id, quantity }) => {
            const decrement = Math.abs(quantity) * -1;

            return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        }
    }
};

module.exports = resolvers;
