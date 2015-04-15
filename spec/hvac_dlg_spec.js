describe("HVAC Dialog", function(){

  beforeEach(function() {
    affix("form#hvac-form input[name=max] input[name=min]");
  });

  it ("it is initialized with a form id and gets the max value", function() {
    $("input[name=max]").val(20);
    var hvacDialog = ssi.HVACDialog.bind("#hvac-form");

    expect(hvacDialog.max()).toEqual('20');
  });

});
