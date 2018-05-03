import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {GridList, GridTile} from 'material-ui/GridList';
import ActionHome from 'material-ui/svg-icons/action/home';
import '../css/single-motboard.css';
import Fav from 'material-ui/svg-icons/action/favorite-border';
import FavFilled from 'material-ui/svg-icons/action/favorite';
import Bookmark from 'material-ui/svg-icons/action/bookmark-border';
import BookmarkFilled from 'material-ui/svg-icons/action/bookmark';
import {red500, fullWhite, blue500} from 'material-ui/styles/colors';
import Checkbox from 'material-ui/Checkbox';

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
    icon:{
        fill: 'white',
        width: 30,
        height: 30,
    }
};

const iconStyles = {
    marginRight: 24,
};
const ListOfMotBoards = [
    {
        url: 'https://images.unsplash.com/photo-1519407710298-222d42b8cdc3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6785fcbdf1abe767250b836e81178808&auto=format&fit=crop&w=1053&q=80',
        description: 'Colorful',
        likes:20,
    },
    {
        url: 'https://images.unsplash.com/photo-1511298341002-15d91b5d09b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c607dd61a9581a65b8eba47eb1d31a58&auto=format&fit=crop&w=675&q=80',
        description: '',
        likes:134,
    },
    {
        url:'https://images.unsplash.com/photo-1502767089025-6572583495f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c395251a00dc113cdcb63d59e0505e62&auto=format&fit=crop&w=1050&q=80',
        description:'',
        likes:112,
    },
    {
        url:'https://images.unsplash.com/photo-1508257599793-5a200cf82b07?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a4b040befc23b61e1b38d524a1aff564&auto=format&fit=crop&w=1050&q=80',
        description:'Texture is good',
        likes:207,
    },
    {
        url:'https://images.unsplash.com/photo-1510007552638-e1c0c4c67ee0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=95ed13af4e929ecf4617003a8e056214&auto=format&fit=crop&w=1050&q=80',
        description:'',
        likes:345,
    },
    {
        url:'https://images.unsplash.com/photo-1512810730836-1a7cde39c455?ixlib=rb-0.3.5&s=71bf7a9ce922def0c36a3facd04195c6&auto=format&fit=crop&w=1950&q=80',
        description:'',
        likes:567,
    },
    {
        url:'https://images.unsplash.com/photo-1504392022767-a8fc0771f239?ixlib=rb-0.3.5&s=b7f4bc9efbf3d1ae81537360cca704f3&auto=format&fit=crop&w=675&q=80',
        description:'',
        likes:27,
    },
    {
        url:'https://images.unsplash.com/photo-1502787530428-11cf61d6ba18?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee60964c06a30ae7596dce9f7380a391&auto=format&fit=crop&w=750&q=80',
        description:'',
        likes:456,
    },
    {
        url:'https://images.unsplash.com/photo-1510046651888-1be61805a114?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=231f12926b338b70673ea107b2c78ca3&auto=format&fit=crop&w=700&q=80',
        description:'',
        likes:12,
    },
];

class Motboards_List extends Component{
    constructor(props){
        super(props);
    }
    state = {
        checked: false,
        pagination:[
            {
                pageNo : 1,
                ActiveStatus:'page-item active'
            },
            {
                pageNo : 2,
                ActiveStatus:'page-item'
            },
            {
                pageNo : 3,
                ActiveStatus:'page-item'
            }
        ]
    };

    updateCheck() {
        this.setState((oldState) => {
            return {
                checked: !oldState.checked,
            };
        });
    }
    render(){
        return (
            <div>
                <div className="row justify-content-center">
                    <div class="col-md-11 mt-5 pt-5">
                        <div style={styles.root}>
                            <GridList
                                cellHeight={300}
                                style={styles.gridList}
                                padding={25}
                                cols={4}
                            >
                                {ListOfMotBoards.map((tile) => (
                                    <GridTile
                                        key={tile.img}
                                        title={
                                            <div>
                                                {tile.description}
                                            </div>
                                        }
                                        actionIcon={<div>
                                            <Checkbox
                                                labelStyle={{color: 'transparent'}}
                                                iconStyle={styles.icon}
                                                labelPosition={'left'}
                                                checkedIcon={<BookmarkFilled />}
                                                uncheckedIcon={<Bookmark/>}
                                                style={styles.checkbox}
                                                label={'Add'}

                                            />
                                            <Checkbox
                                                labelStyle={{color: 'white'}}
                                                labelPosition={'left'}
                                                iconStyle={styles.icon}
                                                checkedIcon={<FavFilled />}
                                                uncheckedIcon={<Fav/>}
                                                label={tile.likes}
                                                style={styles.checkbox}
                                            />

                                        </div>}
                                        actionPosition={'right'}
                                        // subtitle={<span>by <b>{tile.author}</b></span>}
                                        titleBackground={'rgba(255, 255, 255, 1)'}
                                        class={'motboard-single-image-card'}
                                        titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)"
                                    >
                                        <img src={tile.url} />
                                    </GridTile>
                                ))}
                            </GridList>
                            <div className="container row justify-content-center">
                                <nav aria-label="...">
                                    <ul className="pagination">
                                        <li className="page-item disabled">
                                            <span className="page-link">Previous</span>
                                        </li>
                                        {
                                            this.state.pagination.map((page,index) => (
                                                <div>
                                                    <li className={page.ActiveStatus}><a className="page-link" href="#">{index+1}</a></li>
                                                </div>
                                            ))
                                        }
                                        <li className="page-item">
                                            <a className="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Motboards_List);
