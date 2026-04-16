import Tenant from "../models/Tenant.js";

export const tenantMiddleware = async (req, res, next) => {
  try {
    const domain = req.headers.host;

    const tenant = await Tenant.findOne({
      "branding.domain": domain
    });

    if (!tenant) {
      return res.status(404).json({ message: "Tenant not found" });
    }

    req.tenant = tenant;   // attach tenant to request
    next();

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
