app.use(express.static('./dist/form-validation-anguler-10'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/form-validation-anguler-10'}
);
});
app.listen(process.env.PORT || 8080);
