app.get('/product',  (req, res) => {
    const query = { name: req.query.name, filter: req.query.filter };
    const cursor = productCollections.find(query);
    res.json(cursor)
})