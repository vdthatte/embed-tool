import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ApolloClient from 'apollo-boost';
import gql from "graphql-tag";


//https://mattb.omni.co/graphql
//https://48p1r2roz4.sse.codesandbox.io
//LxYe3V85jyae
// https://omni.co/listings/LxYe3V85jyae?metro=san_francisco

const client = new ApolloClient({
  uri:  "https://mattb.omni.co/graphql"
});

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      link: "",
      name: "Boosted Board",
      image: "https://omn1.imgix.net/LLv7BBtSV92J/1KC2UKTqvwyB.jpg?auto=format&fit=clip&ixlib=react-8.5.1&h=600&w=600&dpr=2",
      price: 24,
      code: '<!-- Omni code snippet begins here--><div class="omni-rental-box"><style>.omni-rental-image{height:100%;width:100%;}.omni-rental-item-name{padding-top: 2%;font-size: 22px;font-weight: 700;color: #000;font-family: Arial, Helvetica, sans-serif;}.omni-rental-button{ padding-top: 10px;padding-bottom: 10px; background-color: #4DBB44;color: white;font-size: 16px;width: 80%;border-radius: 8px;border-color: transparent;} .omni-rental-box{ border-width: 1px; border-color: transparent; border-style: solid;border-radius: 20px;width: 20%;padding-bottom: 2%;box-shadow: 0 37.125px 70px -12.125px rgba(0,0,0,0.3);} .omni-rental-link{text-decoration: none;}</style><a class="omni-rental-link" href=' + this.link + ' target="_blank"><center><h1 class="omni-rental-item-name">Boosted Board</h1></center><img class="omni-rental-image"  src= ' + this.image + '></img><center><button class="omni-rental-button">Rent for  ' + this.price + '/day</button></center></a></div> <!-- Omni code snippet ends here-->',
      style: 1,
      
    }

    this.handleChange = this.handleChange.bind(this);
    this.getURLData = this.getURLData.bind(this);
  }

  getURLData(id){
    var id_str = '\"'+ id + '\"'

    client.query({
        query: gql`
          {
            listing(id: ${id_str}){ 
              name 
              price_day 
              url 
              images{ 
                url 
              }
            }
          }
        `
    }).then(result => {
        var listing = result.data.listing
        if(listing.images.length > 0){
          this.setState({
            name: listing.name,
            price: listing.price_day,
            image : listing.images[0].url,
            code: '<!-- Omni code snippet begins here--><div class="omni-rental-box"><style>.omni-rental-image{height:100%;width:100%;}.omni-rental-item-name{padding-top: 2%;font-size: 22px;font-weight: 700;color: #000;font-family: Arial, Helvetica, sans-serif;}.omni-rental-button{ padding-top: 10px;padding-bottom: 10px; background-color: #4DBB44;color: white;font-size: 16px;width: 80%;border-radius: 8px;border-color: transparent;} .omni-rental-box{ border-width: 1px; border-color: transparent; border-style: solid;border-radius: 20px;width: 20%;padding-bottom: 2%;box-shadow: 0 37.125px 70px -12.125px rgba(0,0,0,0.3);} .omni-rental-link{text-decoration: none;}</style><a class="omni-rental-link" href=' + this.link + ' target="_blank"><center><h1 class="omni-rental-item-name">Boosted Board</h1></center><img class="omni-rental-image"  src= ' + this.image + '></img><center><button class="omni-rental-button">Rent for  ' + this.price + '/day</button></center></a></div> <!-- Omni code snippet ends here-->'
          })
        }

      })
      .catch(error => console.error(error));
  }

  componentDidMount(){
    
  }

  handleChange(e) {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
    if(e.target.name == "link"){
      if(e.target.value.split("/")[3] == "listings"){
        //console.log((e.target.value.split("/")[4]).split("?")[0]);

        this.getURLData((e.target.value.split("/")[4]).split("?")[0])
        
      }
    }
    //this.getURLData()

  }

  render() {


    return (
      <div className="App">

        <div>

        <div class="input-form">
            <input class="input-box" name="link" value={this.state.link} placeholder="link to item" onChange={this.handleChange}/><br/>
            <textarea 
              rows="4" 
              class="code-snippet-box" 
              placeholder="price per day" 
              value={'<!-- Omni code snippet begins here--><div class="omni-rental-box"><style>.omni-rental-image{height:100%;width:100%;}.omni-rental-item-name{padding-top: 2%;font-size: 22px;font-weight: 700;color: #000;font-family: Arial, Helvetica, sans-serif;}.omni-rental-button{ padding-top: 10px;padding-bottom: 10px; background-color: #4DBB44;color: white;font-size: 16px;width: 80%;border-radius: 8px;border-color: transparent;} .omni-rental-box{ border-width: 1px; border-color: transparent; border-style: solid;border-radius: 20px;width: 20%;padding-bottom: 2%;box-shadow: 0 37.125px 70px -12.125px rgba(0,0,0,0.3);} .omni-rental-link{text-decoration: none;}</style><a class="omni-rental-link" href=' + this.state.link + ' target="_blank"><center><h1 class="omni-rental-item-name">Boosted Board</h1></center><img class="omni-rental-image"  src= ' + this.state.image + '></img><center><button class="omni-rental-button">Rent for  ' + this.state.price + '/day</button></center></a></div> <!-- Omni code snippet ends here-->'}
              onChange={this.handleChange}
            />
            <br/>

            <div className="copyButtonSection">
            
              <CopyToClipboard text={this.state.code}
                onCopy={() => this.setState({copied: true})}>
                {
                  this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : <button className="copyButton">Copy Code</button>
                }
              </CopyToClipboard>

            </div>

        </div>

          <div class="change-style-buttons">
            <button onClick={this.handleChange} name="style" value={1}>1</button>
            <button onClick={this.handleChange} name="style" value={2}>2</button>
            <button onClick={this.handleChange} name="style" value={3}>3</button>
          </div>

          <div class="right-section">

          {
            (this.state.style == 1) ? (
                <div class="omni-rental-box">
                  <a class="omni-rental-link" href={this.state.link} target="_blank">
                    <center><h1 class="omni-rental-item-name">{this.state.name}</h1></center>
                    <img class="omni-rental-image"  src={this.state.image}></img>
                    <center><button class="omni-rental-button">Rent for ${this.state.price}/day</button></center>
                  </a>
                </div>
            ) : (null)
          }


          {
            (this.state.style == 2) ? (
                <div class="omni-rental-box">
                  <a class="omni-rental-link" href={this.state.link} target="_blank">
                    <center><h1 class="omni-rental-item-name">{this.state.name}</h1></center>
                    <center><button class="omni-rental-button">Rent for ${this.state.price}/day</button></center>
                  </a>
                </div>
            ) : (null)
          }

          {
            (this.state.style == 3) ? (
                <div class="omni-rental-box">
                  <a class="omni-rental-link" href={this.state.link} target="_blank">
                    <center><h1 class="omni-rental-item-name">{this.state.name}</h1></center>
                    <img class="omni-rental-image"  src={this.state.image}></img>
                    <center><button class="omni-rental-button">Rent for ${this.state.price}/day</button></center>
                  </a>
                </div>
            ) : (null)
          }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
