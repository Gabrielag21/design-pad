import React from 'react';
//import ReactDOM from 'react-dom';
import 'C:/Users/thees/OneDrive/Desktop/design-pad/src/components/designContainer.css';


class DesignContainer extends React.Component{
    constructor(props){
        super(props);
        function allowDrop(event) {
            event.preventDefault();
        }

        function drag(event) {
        event.dataTransfer.setData("text", props.target.id);
        }

        function drop(event) {
        event.preventDefault();
            var data = event.dataTransfer.getData("text");
            event.target.appendChild(document.getElementById(data));
        }

    }

    render(){
        return (
            <div className="container">
                <header>
                <h1>Design Pad </h1> 
                <button id="editbutton" type="editbutton">Edit</button>
                <script>
                   
                    function allowDrop(event);

                    function drag(event);

                    drop(event);

                    
                </script>
                </header>
                
                <body id="pad">
                    {/*
                    <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                    <img id="drag1" src="img_logo.gif" draggable="true" ondragstart="drag(event)" width="336" height="69">
                    */}
                

                <div class="wrapper">
                    <div class="one">One</div>
                    <div class="two">Two</div>
                    <div class="three">Three</div>
                    <div class="four">Four</div>
  
</div>
                </body>
            </div>
        )
    }
}

export default DesignContainer;