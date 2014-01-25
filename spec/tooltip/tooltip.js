describe('tooltip:', function() {
  beforeEach(function() {
    this.addMatchers({
      // Place tooltip-specific matchers here...
    });

    var origFunc = $.fn.foundation;
    spyOn($.fn, 'foundation').andCallFake(function() {
      var result = origFunc.apply(this);
      jasmine.Clock.tick(1000); // Let things settle...
      return result;
    });
  });
});
