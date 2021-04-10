import withSession from '../../lib/session';

export default withSession(async (req, res) => {
  const { email, password } = await req.body;
  if (email === 'Amet.Alvirde@gmail.com' && password === 'password') {
    const user = {
      username: 'Admin',
      permissions: ['admin'],
      isLoggedIn: true,
    };

    req.session.set('user', user);
    await req.session.save();
    res.json(user);
  } else {
    res.status(401).send({
      error: 'Invalid user or password',
    });
  }
});
