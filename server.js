app.use(express.static('form-validation-anguler-10'));
app.get('/*', function(req, res) {
  res.sendFile(’index.html’, {root: 'form-validation-anguler-10'}
);
});
app.listen(process.env.PORT || 8080);
