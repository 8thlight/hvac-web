describe("HVAC Dialog", function(){

  beforeEach(function() {
    affix("form#id[name='hvac-form'] input[name='max'] input[name='min']");
  });

  it ("it is initialized with a form id and gets the values of the input", function() {
    $("input[name='max']").val(20);
    var hvacDialog = ssi.HVACDialog.bind("#id");

    expect(hvacDialog.max()).toEqual(20);
  });

});
