import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {GridList, GridTile} from 'material-ui/GridList';
import {jQuery} from 'jquery';
import '../css/userafterlogin.css';
import {getuserallboards} from '../actions';


var boards;
const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 'auto',
        height: 'auto',
    },
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 5,
        fontSize: '20px',
        iconSize: '30px',
    },
    icon: {
        fill: 'white',
        width: 30,
        height: 30,
    }
};

class UserAfterLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boards: {
                "username": "sanjay@gmail.com",
                "password": "123",
                "firstname": "sanjay",
                "lastname": "K",
                "profileImage": "http://localhost:3300/images/defaultUserImage.jpg",
                "motboards": [{
                    "name": "first",
                    "access": "private",
                    "likes": "",
                    "images": [
                        [{
                            "description": "",
                            "url": "http://localhost:3300/images/edgar-castrejon-459807-unsplash.jpg"
                        },
                            {
                                "description": "",
                                "url": "http://localhost:3300/images/saffu-201111-unsplash.jpg"
                            },
                            {
                                "description": "",
                                "url": "http://localhost:3300/images/art-by-lonfeldt-635280-unsplash.jpg"
                            },
                            {
                                "description": "",
                                "url": "http://localhost:3300/images/todd-cravens-119648-unsplash.jpg"
                            },
                            {
                                "description": "",
                                "url": "http://localhost:3300/images/Capture - Copy.PNG"
                            }
                        ]
                    ]
                },
                    {
                        "name": "second",
                        "access": "private",
                        "likes": "",
                        "images": [
                            [{
                                "description": "",
                                "url": "http://localhost:3300/images/edgar-castrejon-459807-unsplash.jpg"
                            },
                                {
                                    "description": "",
                                    "url": "http://localhost:3300/images/saffu-201111-unsplash.jpg"
                                },
                                {
                                    "description": "",
                                    "url": "http://localhost:3300/images/art-by-lonfeldt-635280-unsplash.jpg"
                                },
                                {
                                    "description": "",
                                    "url": "http://localhost:3300/images/todd-cravens-119648-unsplash.jpg"
                                },
                                {
                                    "description": "",
                                    "url": "http://localhost:3300/images/Capture - Copy.PNG"
                                }
                            ]
                        ]
                    }
                ]
            },
            privateMotboards: [],
            publicMotboards: [],
            temp: ''
        };

    }

    //
    // componentDidMount() {
    //     //TODO:Get Motboards of the user - private and public
    //
    // }

    componentDidMount() {
        //TODO:Get Motboards of the user - private and public
        this.props.getuserallboards();
        boards = {
            "username": "sanjay@gmail.com",
            "password": "123",
            "firstname": "sanjay",
            "lastname": "K",
            "profileImage": "http://localhost:3300/images/defaultUserImage.jpg",
            "motboards": [{
                "name": "first",
                "access": "private",
                "likes": "",
                "images":
                    [{
                        "description": "",
                        "url": "https://images.unsplash.com/photo-1511547876233-3710a28eb30a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=22f767f18b0b0f11a5a1b6f3926cbcd3&auto=format&fit=crop&w=700&q=80"
                    },
                        {
                            "description": "",
                            "url": "http://localhost:3300/images/saffu-201111-unsplash.jpg"
                        },
                        {
                            "description": "",
                            "url": "http://localhost:3300/images/art-by-lonfeldt-635280-unsplash.jpg"
                        },
                        {
                            "description": "",
                            "url": "http://localhost:3300/images/todd-cravens-119648-unsplash.jpg"
                        },
                        {
                            "description": "",
                            "url": "http://localhost:3300/images/Capture - Copy.PNG"
                        }
                    ]

            },
                {
                    "name": "second",
                    "access": "public",
                    "likes": "",
                    "images":
                        [{
                            "description": "",
                            "url": "http://localhost:3300/images/edgar-castrejon-459807-unsplash.jpg"
                        },
                            {
                                "description": "",
                                "url": "http://localhost:3300/images/saffu-201111-unsplash.jpg"
                            },
                            {
                                "description": "",
                                "url": "http://localhost:3300/images/art-by-lonfeldt-635280-unsplash.jpg"
                            },
                            {
                                "description": "",
                                "url": "http://localhost:3300/images/todd-cravens-119648-unsplash.jpg"
                            },
                            {
                                "description": "",
                                "url": "http://localhost:3300/images/Capture - Copy.PNG"
                            }
                        ]

                },
                {
                    "name": "third",
                    "access": "public",
                    "likes": "",
                    "images":
                        [{
                            "description": "",
                            "url": "http://localhost:3300/images/saffu-201111-unsplash.jpg"
                        },
                            {
                                "description": "",
                                "url": "http://localhost:3300/images/saffu-201111-unsplash.jpg"
                            },
                            {
                                "description": "",
                                "url": "http://localhost:3300/images/art-by-lonfeldt-635280-unsplash.jpg"
                            },
                            {
                                "description": "",
                                "url": "http://localhost:3300/images/todd-cravens-119648-unsplash.jpg"
                            },
                            {
                                "description": "",
                                "url": "http://localhost:3300/images/Capture - Copy.PNG"
                            }
                        ]

                },
                {
                    "name": "third",
                    "access": "public",
                    "likes": "",
                    "images":
                        [{
                            "description": "",
                            "url": "http://localhost:3300/images/Capture - Copy.PNG"
                        },
                            {
                                "description": "",
                                "url": "http://localhost:3300/images/saffu-201111-unsplash.jpg"
                            },
                            {
                                "description": "",
                                "url": "http://localhost:3300/images/art-by-lonfeldt-635280-unsplash.jpg"
                            },
                            {
                                "description": "",
                                "url": "http://localhost:3300/images/todd-cravens-119648-unsplash.jpg"
                            },
                            {
                                "description": "",
                                "url": "http://localhost:3300/images/Capture - Copy.PNG"
                            }
                        ]

                }
            ]
        };
    }

    pushimage = (temp) => {

        this.props.history.push({
            pathname: '/userboards',
            state: {motBoardName: temp}
        })
    };

    setMotBoards = (boards) => {
        console.log("inside");
        var privateMotboards = boards.motboards.filter((board) => board.access == 'private');
        var publicMotboards = boards.motboards.filter((board) => board.access == 'public');
        console.log('privateMotboards' + privateMotboards[0].name);
        console.log('publicMotboards' + publicMotboards);
        this.setState({
            privateMotboards: privateMotboards,
            publicMotboards: publicMotboards
        })
    };

    render() {
        console.log(this.props.boards);
        //  if(this.props.boards.motboards)
        //    {this.setMotBoards(this.props.boards)}

        if (this.props.boards.data) {
            return (
                <div>
                    <div style={{"padding": "25px"}} className={"mt-5"}>
                        <div className="row">
                            <div className="col-md-5 ml-5 mr-5 EachBoardBox">
                                <h1 className="Questrial" style={{'text-align': 'center'}}>Private MotBoards</h1>
                                <div className="row">
                                    <hr/>
                                </div>
                                <GridList
                                    cellHeight={300}
                                    style={styles.gridList}
                                    padding={25}
                                    cols={2}
                                >
                                    {this.props.boards.data[1].map((tile) => (
                                        <GridTile
                                            key={tile.images[0][0].url}
                                            title={
                                                <div>
                                                    {tile.name}
                                                </div>
                                            }
                                            titleBackground={'rgba(255, 255, 255, 1)'}
                                            class={'motboard-single-image-card'}
                                            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)"
                                        >
                                            <img src={tile.images[0][0].url}
                                                 onClick={this.pushimage.bind(this, tile.name)}
                                            />
                                        </GridTile>
                                    ))}
                                </GridList>
                            </div>

                            <div className="col-md-5 mr-5 EachBoardBox">
                                <h1 className="Questrial" style={{'text-align': 'center'}}>Public MotBoards</h1>
                                <div className="row">
                                    <hr/>
                                </div>
                                <GridList
                                    cellHeight={300}
                                    style={styles.gridList}
                                    padding={25}
                                    cols={2}
                                >
                                    {this.props.boards.data[0].map((tile) => (
                                        <GridTile
                                            key={tile.images[0][0].url}
                                            title={
                                                <div>
                                                    {tile.name}
                                                </div>
                                            }
                                            titleBackground={'rgba(255, 255, 255, 1)'}
                                            class={'motboard-single-image-card'}
                                            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)"
                                        >
                                            <img src={tile.images[0][0].url}
                                                 onClick={this.pushimage.bind(this, tile.name)}
                                            />
                                        </GridTile>
                                    ))}
                                </GridList>
                            </div>
                        </div>
                    </div>
                </div>)
        }

        else
            return (<div></div>)

    }
}


function mapStateToProps(state) {
    return {boards: state.getuserboards}
}


export default connect(mapStateToProps, {getuserallboards})(withRouter(UserAfterLogin));
