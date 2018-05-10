import React from "react";
import {GridList, GridTile} from 'material-ui/GridList';
import RGL from "react-grid-layout";
import '../css/arrange-motbaordImages.css';
import _ from "lodash";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {Responsive, WidthProvider} from "react-grid-layout";
import {getImagesArrange} from '../actions/index';


const ResponsiveReactGridLayout = WidthProvider(Responsive);

//const originalLayout = getFromLS("layout") || [];
/**
 * This layout demonstrates how to sync to localstorage.
 */
class Arrange extends React.PureComponent {


    static defaultProps = {
        className: "layout",
        rowHeight: 30,


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
        let motBoardName = "Birthday";
        this.props.getImagesArrange(motBoardName);
        //this.props.ge(motBoardName);
    }


    generateDOM() {
        console.log(this.props.images);
        if(this.props.images)
            return _.map(this.props.images, function (item,i) {
                return (
                    <div key={i} className="container arrange_image_card m-5" style={{"height":"100%","width":"100%","background-color":"white"}}>
                        <img src={item.url}   alt="Mountain View" style={{'height': '100%', 'width': '100%'}}/>
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
        console.log("------------------------");
        console.log(this.state.layouts);
        console.log("-------------------------");
        this.setState({
            layouts: {lg: generateLayout()}
        });
        console.log("------------------------");
        console.log(this.state.layouts);
        console.log("-------------------------");
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
    return {
        images: state.imageData
    }
}

export default  (connect(mapStateToProps,{getImagesArrange})(Arrange));
