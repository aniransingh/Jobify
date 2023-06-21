const notFoundMiddleware = (req, res) => {
    return res.status(404).send("route not found");
}

export default notFoundMiddleware;