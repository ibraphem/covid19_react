import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';

class infoItems extends Component {

    formatDate = (date) => {
        return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }

    
    info = () =>{
        
      //  const { ind, item: {country} }= this.props;

        if((this.props.ind + 1) % 3 === 1){
                return(
            
                <div className="listing-item" id="lis">
                            <figure className="ima">
                                <img src={this.props.item.countryInfo.flag}  alt="flag"/>
                                <figcaption>
                                <div className="caption">
                                    <h1>{this.props.item.country}</h1>
                                   
                                    </div>
                                </figcaption>
                            </figure>
                            <div className="listing">
                                
                                <h4>Total No of cases: &nbsp; {this.props.item.cases}</h4>
                                <h4>Active cases: &nbsp; {this.props.item.active}</h4>
                                <h4>Today's cases: &nbsp; {this.props.item.todayCases}</h4>
                                <h4>Recovered: &nbsp; {this.props.item.recovered}</h4>
                                <h4>Total No of death: &nbsp; {this.props.item.deaths}</h4>
                                <h4>Today's death: &nbsp; {this.props.item.todayDeaths}</h4>
                                <h4 className="upd">updated last: &nbsp; {this.formatDate(this.props.item.updated)}</h4>
                            </div>
                        </div>
                )
         
          
        } else if((this.props.ind + 1) % 3 === 2){
            return(
                <div className="listing-item" id="lis">
                <figure className="ima">
                    <img src={this.props.item.countryInfo.flag}  alt="flag"/>
                    <figcaption>
                    <div className="caption">
                        <h1>{this.props.item.country}</h1>
                       
                        </div>
                    </figcaption>
                </figure>
                <div className="listing">
                <h4>Total No of cases: &nbsp; {this.props.item.cases}</h4>
                <h4>Active cases: &nbsp; {this.props.item.active}</h4>
                <h4>Today's cases: &nbsp; {this.props.item.todayCases}</h4>
                <h4>Recovered: &nbsp; {this.props.item.recovered}</h4>
                <h4>Total No of death: &nbsp; {this.props.item.deaths}</h4>
                <h4>Today's death: &nbsp; {this.props.item.todayDeaths}</h4>
                <h4 className="upd">updated last: &nbsp; {this.formatDate(this.props.item.updated)}</h4>
                </div>
            </div>

            )
       
        } else if((this.props.ind + 1) % 3 === 2){
            return(
                <div className="listing-item" id="lis">
                <figure className="ima">
                    <img src={this.props.item.countryInfo.flag} alt="flag"/>
                    <figcaption>
                    <div className="caption">
                        <h1>{this.props.item.country}</h1>
                        
                        </div>
                    </figcaption>
                </figure>
                <div className="listing">
                <h4>Total No of cases: &nbsp; {this.props.item.cases}</h4>
                <h4>Active cases: &nbsp; {this.props.item.active}</h4>
                <h4>Today's cases: &nbsp; {this.props.item.todayCases}</h4>
                <h4>Recovered: &nbsp; {this.props.item.recovered}</h4>
                <h4>Total No of death: &nbsp; {this.props.item.deaths}</h4>
                <h4>Today's death: &nbsp; {this.props.item.todayDeaths}</h4>
                <h4 className="upd">updated last: &nbsp; {this.formatDate(this.props.item.updated)}</h4>
                </div>
            </div>

            )
       
        }
    }
    render() {
       // console.log(this.props.item)
        return (
            <div className="hover-table-layout">
                {this.info()}
            </div>
        );
    }
}

export default infoItems;