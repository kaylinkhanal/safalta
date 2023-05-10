const addNewUser = async(req, res) => {
    const data = await User.create(req.body)
   }

module.exports = addNewUser