async function exampleRequest(req, res) {
	const { table } = req.params;
	const { qtype, query, oper } = req.body || 12;
	return res.send({
		qtype, query, oper, table,
	});
}
module.exports = { exampleRequest };
w