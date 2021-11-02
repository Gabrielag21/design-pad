import React from 'react';
import ReactDOM from 'react-dom';
import 'C:/Users/thees/OneDrive/Desktop/design-pad/src/components/padInput.css';


class PadInput extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div class="padInput">
                <div id="pad1">          </div> <div id="pad2">      </div>  <div id="pad3">     </div>
                <div id="pad4">          </div> <div id="pad5">      </div>  <div id="pad6">     </div>
                <div id="pad7">          </div> <div id="pad8">      </div>  <div id="pad9">     </div>
                </div>



        )
    }
}
export default PadInput;