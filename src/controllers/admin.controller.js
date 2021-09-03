class AdminController {
    login(req, res) {
        const admname = `${process.env.ADMINNAME}`;
        const admpass = `${process.env.ADMINPASS}`;

        const { user, password } = req.body;

        if(admname == user && admpass == password) {
            return res.json({ is_auth: true, auth_token: `${process.env.ADMINTOKEN}` });
        }

        return res.json({ is_auth: false, auth_token: null });
    }
}

module.exports = new AdminController;