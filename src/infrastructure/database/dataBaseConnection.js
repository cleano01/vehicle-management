const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    const connection = await 
    mongoose.connect('mongodb://root:root@localhost:27017', 
      { useNewUrlParser: true,  
        dbName: 'vehicles',
      }
    );
    console.log('Connected to database');
    return connection;
  } catch (error) {
    console.error('Failed to connect to database:', error);
    process.exit(1); 
  }
};

connectToDatabase();

module.exports = connectToDatabase;
