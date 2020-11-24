app.use(express.static('./src/form-validation-anguler-10'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'src/form-validation-anguler-10'}
);
});
app.listen(process.env.PORT || 8080);
