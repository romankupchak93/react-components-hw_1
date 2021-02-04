import React from 'react';

import ComponentB from './componentB';

export class ComponentA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({value: e.target.value})
    }

    render() {
        return (
                 <div className="col-md-4">
                    <div className="col align-self-center mt-3">
                        <h3 className="text-center">Task 1</h3>
                        <div className="form-floating">
                            <input type="text" className="form-control" id="value" placeholder="" onChange={this.handleChange} />
                            <label htmlFor="value" className="form-label">Введіть текст</label>
                        </div>
                        <ComponentB value={this.state.value} />
                    </div>
                 </div>
        );
    }
}
