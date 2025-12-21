export const authorize = (policyFn, resourceFetcher) => {
  return async (req, res, next) => {
    const user = req.user;
    const resource = await resourceFetcher(req);

    if (!policyFn(user, resource)) {
      return res.status(403).json({ error: 'Access denied by policy' });
    }

    req.resource = resource; // pass resource downstream
    next();
  };
};