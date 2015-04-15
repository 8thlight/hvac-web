describe("HVAC Smart Dialog", function() {
  var server;

  beforeEach(function () {
    server = sinon.fakeServer.create();
  });

  afterEach(function () {
    server.restore();
  });

  it ("submits on okay", function() {
    var view = jasmine.createSpyObj();
    var smartDialog = new ssi.HVAC.SmartDialog(view);

    smartDialog.Save();

    expect(requests[0].url, "/save?min-temp=&max-temp=");
  });
});
