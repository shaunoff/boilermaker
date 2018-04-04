const axios = require('axios')
const {User,Appraisal} = require('../db/models')

const bamboo = async () => {
	const request = await axios.request(
		{
			url: "https://api.bamboohr.com/api/gateway.php/p3i/v1/employees/directory",
			method: 'get',
			auth: {
				username: "c1ea1493c3de69b2f6dcf74ea402229f3895c388",
				password: "p3ibamboo"
			},
			headers: {'Accept': 'application/json'},
		}
	)
	const data = request.data.employees
	if(data){console.log("data received")}
	data.forEach(employee => {
		const {workEmail, firstName, lastName} = employee
 		User.findOne({where: {email: workEmail}})
      .then(foundUser => {
        (foundUser
          ? ""
          : User.create({email: workEmail, firstName,lastName})
            .then(console.log("userAdded",workEmail))
        )
      })
      .catch("error")
	})

}

module.exports = bamboo
