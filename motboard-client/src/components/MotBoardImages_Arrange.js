import React from "react";
import {GridList, GridTile} from 'material-ui/GridList';
import RGL, { WidthProvider } from "react-grid-layout";
import '../css/arrange-motbaordImages.css';
import _ from "lodash";
import {withRouter} from "react-router-dom";
const ReactGridLayout = WidthProvider(RGL);

//const originalLayout = getFromLS("layout") || [];
/**
 * This layout demonstrates how to sync to localstorage.
 */
class Arrange extends React.PureComponent {
    static defaultProps = {
        className: "layout",
        images:[
            {
                url: 'https://images.unsplash.com/photo-1519407710298-222d42b8cdc3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6785fcbdf1abe767250b836e81178808&auto=format&fit=crop&w=1053&q=80',
                description: 'Colorful',
            },
            {
                url: 'https://images.unsplash.com/photo-1511298341002-15d91b5d09b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c607dd61a9581a65b8eba47eb1d31a58&auto=format&fit=crop&w=675&q=80',
                description: '',
            },
            {
                url:'https://images.unsplash.com/photo-1502767089025-6572583495f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c395251a00dc113cdcb63d59e0505e62&auto=format&fit=crop&w=1050&q=80',
                description:'I like this',
            },
            {
                url:'https://images.unsplash.com/photo-1508257599793-5a200cf82b07?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a4b040befc23b61e1b38d524a1aff564&auto=format&fit=crop&w=1050&q=80',
                description:'Texture is good',
            },
            {
                url:'https://images.unsplash.com/photo-1510007552638-e1c0c4c67ee0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=95ed13af4e929ecf4617003a8e056214&auto=format&fit=crop&w=1050&q=80',
                description:'',
            },
            {
                url:'https://images.unsplash.com/photo-1512810730836-1a7cde39c455?ixlib=rb-0.3.5&s=71bf7a9ce922def0c36a3facd04195c6&auto=format&fit=crop&w=1950&q=80',
                description:'',
            },
            {
                url:'https://images.unsplash.com/photo-1504392022767-a8fc0771f239?ixlib=rb-0.3.5&s=b7f4bc9efbf3d1ae81537360cca704f3&auto=format&fit=crop&w=675&q=80',
                description:'',
            },
            {
                url:'https://images.unsplash.com/photo-1502787530428-11cf61d6ba18?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee60964c06a30ae7596dce9f7380a391&auto=format&fit=crop&w=750&q=80',
                description:'',
            },
            {
                url:'https://images.unsplash.com/photo-1510046651888-1be61805a114?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=231f12926b338b70673ea107b2c78ca3&auto=format&fit=crop&w=700&q=80',
                description:'',
            },

        ],
        cols: 10,
        rowHeight: 100,
        onLayoutChange: function () {
        },
        // This turns off compaction so you can place items wherever.
        verticalCompact: true,
        preventCollision: true
    };

    constructor(props) {
        super(props);
        const layout = this.generateLayout();
        this.state = {layout};
    }

    generateDOM() {
        return _.map(this.props.images, function (item,i) {
            return (
                <div key={i} className="arrange_image_card m-5">
                        <img src={item.url} alt="Mountain View" height={300} width={'auto'}/>
                </div>
            );
        });
    }

    generateLayout() {
        const p = this.props;
        return _.map(new Array(this.props.images.length), function (item, i) {
            const y = _.result(p, "y") || Math.ceil(8) + 1;
            return {
                x: (i * 2) % 12,
                y: Math.floor(i / 6) * y,
                w: 2,
                h: 2,
                i: i.toString()
            };
        });
    }

    onLayoutChange(layout) {
        this.props.onLayoutChange(layout);
    }

    render() {
        return (
            <ReactGridLayout
                layout={this.state.layout}
                onLayoutChange={this.onLayoutChange}
                rowHeight={100}
                {...this.props}
            >
                {this.generateDOM()}
            </ReactGridLayout>
        );
    }
}

export default withRouter(Arrange);