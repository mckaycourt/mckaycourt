import React, {Component} from 'react';
import {
    Grid,
    Card,
    CardHeader,
    CardContent,
    GridList,
    GridListTile,
    GridListTileBar,
    CardActionArea
} from "@material-ui/core";
import MyMenu from "./Menu";

export default class Bingo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                [
                    {name: 'this is testing text to see what happens if this is somewhat long', selected: false},
                    {name: 'test', selected: false},
                    {name: 'test', selected: false},
                    {name: 'test', selected: false},
                    {name: 'test', selected: false},
                ],
                [
                    {name: 'test', selected: false},
                    {name: 'test', selected: false},
                    {name: 'test', selected: false},
                    {name: 'test', selected: false},
                    {name: 'test', selected: false},
                ],
                [
                    {name: 'test', selected: false},
                    {name: 'test', selected: false},
                    {name: 'test', selected: false},
                    {name: 'test', selected: false},
                    {name: 'test', selected: false},
                ],
                [
                    {name: 'test', selected: false},
                    {name: 'test', selected: false},
                    {name: 'test', selected: false},
                    {name: 'test', selected: false},
                    {name: 'test', selected: false},
                ],
                [
                    {name: 'test', selected: false},
                    {name: 'test', selected: false},
                    {name: 'test', selected: false},
                    {name: 'test', selected: false},
                    {name: 'test', selected: false},
                ],
            ],
            height: 0
        }
    }

    ref = React.createRef();

    componentDidMount() {
        window.addEventListener('resize', function () {
            this.handleResize(this.ref)
        }.bind(this));
        this.handleResize(this.ref);
    }

    updateSelected = (row, obj) => {
        let options = this.state.options;
        let rowIndex = options.indexOf(row);
        let objIndex = options[rowIndex].indexOf(obj);
        options[rowIndex][objIndex].selected = !options[rowIndex][objIndex].selected;
        this.setState({
            options
        })
    };

    handleResize = (ref) => {
        let current = ref.current;
        if (current) {
            let height = current.clientWidth;
            this.setState({
                height
            })
        }
    };

    render() {
        let box = {
            margin: '1px',
            border: '1px solid #f5f5f5',
            fontSize: this.state.height < 100 ? 'xx-small' :
                this.state.height > 200 ? 'xx-large' :
                    this.state.height > 150 ? 'large'
                        : 'medium',
            height: `${this.state.height}px`
        };

        return (
            <div>
                <MyMenu user={this.props.user}/>
                <Grid container justify={'center'}>
                    {
                        this.state.options.map((row, key) => (
                            <Grid item xs={12} key={key}>
                                <Grid container justify={'center'} key={key}>
                                    {
                                        row.map((obj, key) => (
                                            <Grid item xs={2} key={key} ref={this.ref}>
                                                <Card onClick={() => this.updateSelected(row, obj)} variant={'outlined'}
                                                      style={{...box, backgroundColor: obj.selected ? 'red' : 'white'}}
                                                      key={key}>
                                                    {/*<CardHeader title={obj.name} subheader={obj.name}/>*/}
                                                    <CardContent>
                                                        {obj.name}
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        )
    }
}