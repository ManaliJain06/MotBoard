import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import Radium, {StyleRoot} from 'radium';
import { fadeInLeft } from 'react-animations';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import '../css/team.css';
import {PieChart, Pie, Sector} from 'recharts';

const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
    {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
        fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

const styles = {
    fadeInLeft: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInLeft, 'bounce'),
    }
}

class Charts extends Component{
    constructor(props){
        super(props);
        this.state={
            activeIndex: 0,
            likes: [
                {
                    label:'Colorful',
                    likes:200
                },
                {
                    label:'Black Nad White',
                    likes:350
                },
                {
                    label:'White',
                    likes:1000
                }],
            bookmarks: [
                {
                    label:'Colorful',
                    bookmarks:30
                },
                {
                    label:'Black Nad White',
                    bookmarks:200
                },
                {
                    label:'White',
                    bookmarks:100
                }],}
    }
    onPieEnter = (data, index) => {
        this.setState({
            activeIndex: index,
        });
    }
    render(){
        return (
            <div className="container" style={{"padding-bottom":"55px"}}>
                <div className="row">
                    <div className="col-md-6 justify-content-center">
                        <div className={" row col-md-12"}>
                            <BarChart width={600} height={300} data={this.state.likes}
                                      margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                <CartesianGrid/>
                                <XAxis dataKey="label"/>
                                <YAxis/>
                                <Tooltip/>
                                <Legend/>
                                <Bar dataKey="likes" fill="#ba68c8"/>
                            </BarChart>
                        </div>

                        <div className={" row col-md-12"}>
                            <BarChart width={600} height={300} data={this.state.bookmarks}
                                      margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                <CartesianGrid/>
                                <XAxis dataKey="label"/>
                                <YAxis/>
                                <Tooltip/>
                                <Legend/>
                                <Bar dataKey="bookmarks" fill="#fff176"/>
                            </BarChart>
                        </div>
                    </div>
                    <div className="col-md-6 justify-content-center">
                        <PieChart width={1000} height={700}>
                            <Pie
                                activeIndex={this.state.activeIndex}
                                activeShape={renderActiveShape}
                                data={data}
                                cx={300}
                                cy={200}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#ba68c8"
                                onMouseEnter={this.onPieEnter}
                            />
                        </PieChart>
                    </div>
                </div>


            </div>

        )
    }
}

export default withRouter(Charts);