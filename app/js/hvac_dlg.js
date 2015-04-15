extend("ssi.HVACDialog", {
  bind: function(formId) {
    var maxField = $(formId).children("input[name=max]");

    return {
      max: function() {
        return maxField.val();
      }
    };
  }
});
