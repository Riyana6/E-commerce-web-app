import React, { Component } from 'react';
import Product from './Product';
import { storeProducts } from '../data';
import Title from './Title';
export default class ProductList extends Component {
    state={
        products:storeProducts
    };
    render() {
        console.log(this.state.products);
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <Title name="our" title="products"/> 
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
            //<Product/>
        )
    }
}
