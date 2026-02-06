const searchFlights = async (req, res) => {
  const { from, to, date } = req.query;

  return res.json({
    type: 'flight',
    from,
    to,
    date,
    results: [
      { airline: 'Demo Air', price: 199, currency: 'GBP' }
    ]
  });
};

module.exports = { searchFlights };
