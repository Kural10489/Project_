import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
  it('searched value and title Should Match',()=>{
    const pipe=new FilterPipe();
    expect(pipe.transform([{
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 1500.99,
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "category": "Men clothing",
      "Quantity": 0,
    },{
      "id": 29,
      "title": "Campus Sutra Men's Cotton Colour-Blocked Denim Jacket with Hoodie | Structured Jacket with Comfort Fit, Regular Full Sleeves and Stretchable Fabric for Casual Wear",
      "price": 1059.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "Men clothing",
      "Quantity": 0
    },],
    'meN','title')).toBeTrue;
  })
  // Case 2
  it('search value and category Should Match',()=>{
    const pipe=new FilterPipe();
    expect(pipe.transform([{
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 1500.99,
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "category": "Men clothing",
      "Quantity": 0,
    },{
      "id": 29,
      "title": "Campus Sutra Men's Cotton Colour-Blocked Denim Jacket with Hoodie | Structured Jacket with Comfort Fit, Regular Full Sleeves and Stretchable Fabric for Casual Wear",
      "price": 1059.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "Men clothing",
      "Quantity": 0
    },],
    'Men clothing','category')).toBeTrue;
  })
});
