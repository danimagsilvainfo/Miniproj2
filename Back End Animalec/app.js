const port = process.env.PORT || 8080;
const host = process.env.HOST || '0.0.0.0';
const express = require('express');
const app = express();

app.use('/assets', express.static('assets'));
app.use('/views', express.static('views'));

require('./init/db.js')(app, async () => {
  require('./init/middleware')(app);
  require('./init/router')(app);

  // Criar utilizador admin inicial se não existir na BD local
  const User = require('./models/user.model');
  const adminExists = await User.findOne({ 'auth.username': 'admin' });
  if (!adminExists) {
    const adminUser = new User({
      name: 'Admin',
      type: 'admin',
      auth: {
        username: 'admin',
        password: 'admin'
      },
      active: true
    });
    await adminUser.save();
    console.log('Utilizador admin criado com sucesso (admin / admin)!');
  }

  app.listen(port, host, (error) => {
    if (error) throw error;
    console.log('Your app is listening on ' + port);
  });
});