import React from "react";
import {GridList, GridTile} from 'material-ui/GridList';
import RGL from "react-grid-layout";
import '../css/arrange-motbaordImages.css';
import _ from "lodash";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {Responsive, WidthProvider} from "react-grid-layout";


const ResponsiveReactGridLayout = WidthProvider(Responsive);

//const originalLayout = getFromLS("layout") || [];
/**
 * This layout demonstrates how to sync to localstorage.
 */
class Arrange extends React.PureComponent {


    static defaultProps = {
        className: "layout",
        rowHeight: 30,



        // images:[
        //     {
        //         url: 'https://images.unsplash.com/photo-1519407710298-222d42b8cdc3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6785fcbdf1abe767250b836e81178808&auto=format&fit=crop&w=1053&q=80',
        //         description: 'Colorful',
        //     },
        //     {
        //         url: 'https://images.unsplash.com/photo-1511298341002-15d91b5d09b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c607dd61a9581a65b8eba47eb1d31a58&auto=format&fit=crop&w=675&q=80',
        //         description: '',
        //     },
        //     {
        //         url:'https://images.unsplash.com/photo-1502767089025-6572583495f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c395251a00dc113cdcb63d59e0505e62&auto=format&fit=crop&w=1050&q=80',
        //         description:'I like this',
        //     },
        //     {
        //         url:'https://images.unsplash.com/photo-1508257599793-5a200cf82b07?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a4b040befc23b61e1b38d524a1aff564&auto=format&fit=crop&w=1050&q=80',
        //         description:'Texture is good',
        //     },
        //     {
        //         url:'https://images.unsplash.com/photo-1510007552638-e1c0c4c67ee0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=95ed13af4e929ecf4617003a8e056214&auto=format&fit=crop&w=1050&q=80',
        //         description:'',
        //     },
        //     {
        //         url:'https://images.unsplash.com/photo-1512810730836-1a7cde39c455?ixlib=rb-0.3.5&s=71bf7a9ce922def0c36a3facd04195c6&auto=format&fit=crop&w=1950&q=80',
        //         description:'',
        //     },
        //     {
        //         url:'https://images.unsplash.com/photo-1504392022767-a8fc0771f239?ixlib=rb-0.3.5&s=b7f4bc9efbf3d1ae81537360cca704f3&auto=format&fit=crop&w=675&q=80',
        //         description:'',
        //     },
        //     {
        //         url:'https://images.unsplash.com/photo-1502787530428-11cf61d6ba18?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee60964c06a30ae7596dce9f7380a391&auto=format&fit=crop&w=750&q=80',
        //         description:'',
        //     },
        //     {
        //         url:'https://images.unsplash.com/photo-1510046651888-1be61805a114?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=231f12926b338b70673ea107b2c78ca3&auto=format&fit=crop&w=700&q=80',
        //         description:'',
        //     },
        //
        // ],
        onLayoutChange: function () {
        },
        cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
        initialLayout: generateLayout()
    };

    state = {
        currentBreakpoint: "lg",
        compactType: "horizontal",
        mounted: false,
        layouts: {lg: this.props.initialLayout}
    };


    componentDidMount() {
        this.setState({mounted: true});
    }

    generateDOM() {

        console.log(this.props.images);
        if(this.props.images)
            return _.map(this.props.images.images, function (item,i) {
                console.log("asdasd");
                return (
                    <div key={i} className="container arrange_image_card m-5" style={{"height":"100%","width":"100%","background-color":"white"}}>
                        <img src={'http://localhost:3300/images/'+item}   alt="Mountain View" style={{'height': '100%', 'width': '100%'}}/>
                    </div>
                );
            });

    }

    onBreakpointChange = breakpoint => {
        this.setState({
            currentBreakpoint: breakpoint
        });
    };

    onCompactTypeChange = () => {
        const {compactType: oldCompactType} = this.state;
        const compactType =
            oldCompactType === "horizontal"
                ? "vertical"
                : oldCompactType === "vertical" ? null : "horizontal";
        this.setState({compactType});
    };

    onLayoutChange = (layout, layouts) => {
        this.props.onLayoutChange(layout, layouts);
    };


    onNewLayout = () => {
        this.setState({
            layouts: {lg: generateLayout()}
        });
    };

    // constructor(props) {
    //     super(props);
    //     const layout = ()=>this.generateLayout();
    // console.log(layout);
    //     this.state = {layout};
    // }


    render() {
        return (
            <div>
                <div>
                    Current Breakpoint: {this.state.currentBreakpoint} ({
                    this.props.cols[this.state.currentBreakpoint]
                }{" "}
                    columns)
                </div>
                <div>
                    Compaction type:{" "}
                    {_.capitalize(this.state.compactType) || "No Compaction"}
                </div>
                <button onClick={this.onNewLayout}>Generate New Layout</button>
                <button onClick={this.onCompactTypeChange}>
                    Change Compaction Type
                </button>
                <ResponsiveReactGridLayout
                    {...this.props}
                    layouts={this.state.layouts}
                    onBreakpointChange={this.onBreakpointChange}
                    onLayoutChange={this.onLayoutChange}
                    // WidthProvider option
                    measureBeforeMount={false}
                    // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
                    // and set `measureBeforeMount={true}`.
                    useCSSTransforms={this.state.mounted}
                    compactType={this.state.compactType}
                    preventCollision={!this.state.compactType}
                >
                    {this.generateDOM()}
                </ResponsiveReactGridLayout>
            </div>
        );
    }
}

function generateLayout() {
    return _.map(_.range(0, 25), function(item, i) {
        var y = Math.ceil( 7) + 1;
        return {
            x: (_.random(0, 5) * 2) % 12,
            y: Math.floor(i / 6) * y,
            w: 3,
            h: y,
            i: i.toString()
        };
    });
}


function mapStateToProps(state) {
    return {images: state.imageData}
}

export default  (connect(mapStateToProps)(Arrange));
