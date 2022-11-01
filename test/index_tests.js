QUnit.test('Set title for Kian, Matthew and Eva', function(assert) {
    var title = document.getElementById('pageTitle').innerText;
    assert.equal(title, 'Kian, Matthew and Eva');
});