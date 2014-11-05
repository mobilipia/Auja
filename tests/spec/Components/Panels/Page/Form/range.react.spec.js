/** @jsx React.DOM */

define(['jasmine_matchers', 'react'], function (j, r) {
    
    window.React = r;
    
    require([
        'build/Components/Panels/Page/Form/range.react',
        'build/Objects/Page/Form/range'
    ], function(Range, Item) {
        
        describe('Range form input', function () {
    
            beforeEach(function () {
                this.addMatchers(require('jasmine_matchers'));
            });
            
            it('should have a label', function () {
                var TestUtils = React.addons.TestUtils;
                
                var item = new Item({
                    value: 10,
                    label: "This is the label"
                });
                                
                // Render a checkbox with label in the document
                var text = TestUtils.renderIntoDocument(Range({
                    item: item
                }));

                var label = TestUtils.findRenderedDOMComponentWithTag(text, 'label');
                expect(label.getDOMNode().textContent).toEqual('This is the label');
            });
        });
    });
});