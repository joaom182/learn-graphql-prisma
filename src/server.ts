import app from './app';
const port = process.env.PORT || 5002;

export default {
  init: async () => {
    (await app())
      .listen({ port })
      .then(() => console.log(`Server is running on port :${port}`));
  },
};
