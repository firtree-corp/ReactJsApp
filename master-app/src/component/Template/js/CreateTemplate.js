import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { TextField, Checkbox, Dialog, Button, DialogContent, DialogActions, AppBar, Toolbar, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import "../css/CreateTemplate.css";
import DraggableList from 'react-drag-list';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#000000",
        },
        secondary: {
            main: "#00cc66",
        },
    },
});

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNotes: false,
            obj: this.props.item
        }
    
    }
    InputHandle = (event, key) => {
        const { obj } = this.state;
        let tmp = obj;
        tmp[key] = event.target.value;

        this.setState({
            obj: tmp
        })
        this.props.ItemHandler(this.state.obj, this.props.idx)
    }
    CheckboxHandler = (key) => {
        const { obj } = this.state;
        let tmp = obj;
        tmp[key] = !tmp[key];

        this.setState({
            obj: tmp
        })
        this.props.ItemHandler(this.state.obj, this.props.idx)
    }
    render() {
        return (
            <div className="GLItem">
            <div className="Item">
                <TextField margin="normal" label="Name"
                    value={this.state.obj.name}
                    onChange={(value) => this.InputHandle(value, "name")}
                    variant="outlined">
                </TextField>
                <TextField margin="normal" label="Valeur"
                    value={this.state.obj.value}
                    onChange={(value) => this.InputHandle(value, "value")}
                    variant="outlined">
                </TextField>
                <TextField margin="normal" label="Diminutif"
                    value={this.state.obj.nickname}
                    onChange={(value) => this.InputHandle(value, "nickname")}
                    variant="outlined">
                </TextField>
                <div className="Check">
                Testable
                <Checkbox checked={this.state.obj.testable} onChange={() => this.CheckboxHandler("testable")}></Checkbox>
                </div>
                <div className="Check">
                Favori
                <Checkbox checked={this.state.obj.favorite} onChange={() => this.CheckboxHandler("favorite")}></Checkbox>
                </div>
                <div className="Check">
                Supprimable
                <Checkbox checked={this.state.obj.deletable} onChange={() => this.CheckboxHandler("deletable")}></Checkbox>
                </div>
                <div className="Check">
                Modifiable
                <Checkbox checked={this.state.obj.modifiable} onChange={() => this.CheckboxHandler("modifiable")}></Checkbox>
                </div>
                <IconButton onClick={() => this.props.ItemDeleter(this.props.idx)} color="default">
                    <Icon>delete</Icon>
                </IconButton>
                </div>
                <Button style={{backgroundColor:"#00000021", textTransform: 'none'}} onClick={() => {this.setState({showNotes: !this.state.showNotes})}}>
                <Icon>
                    {(this.state.showNotes && "expand_less") || "expand_more"}
                </Icon>
                </Button>
                {this.state.showNotes &&
                <TextField multiline style={{width: "100%"}} margin="normal" label="Notes"
                    value={this.state.obj.note}
                    onChange={(value) => this.InputHandle(value, "note")}
                    variant="outlined">
                </TextField>
                }
            </div>
        )
    }
}

class Type extends Component {
    render() {
        return (
            <DraggableList
                handles={false}
                dataSource={this.props.items}
                row={(item, idx) => {
                    if (item.type === this.props.type)
                        return (<Item key={idx} idx={idx} ItemDeleter={this.props.ItemDeleter} ItemHandler={this.props.ItemHandler} item={item}/>)
                }}
                onUpdate={(event, source) => this.props.ItemTabHandler(source)}
            />
            )
        }
}

class MyBar extends Component {
    render() {
        return (
            <AppBar position="sticky">
                <Toolbar className="ToolBar">
                <TextField margin="normal"
                    value={this.props.name}
                    label="Nom du modèle"
                    variant="filled"
                    onChange={(event) => this.props.NameHandler(event)}
                    >
                </TextField>
                <div style={{display:"flex", flexDirection: "row"}}>
                    <IconButton style={{backgroundColor: "#00000000"}}
                        onClick={() => this.props.HelpFct()}>
                        <Icon>
                            help_outline
                        </Icon>
                    </IconButton>
                    <MyDialogue icon='delete_forever' onConfirm={() => this.props.DeleteFct()}
                    Message='Vous allez supprimer le modèle définitivement'/>
                    <IconButton style={{backgroundColor: "#00000000"}}
                        onClick={() => this.props.SaveFct()}>
                        <Icon>
                            save_alt
                        </Icon>
                    </IconButton>
                </div>
                </Toolbar>
            </AppBar>
        )
    }
}

class MyDialogue extends Component {
    state = {
        open: false
    }
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    handleClose = () => {
        this.setState({ open: false });
    };
    render () {
        const child = React.Children.map(this.props.children, child =>
            React.cloneElement(child, {onClick: this.handleClickOpen})
        )
        return (
            <div style={{marginLeft: '1%', marginRight: '1%'}}>
                <Dialog
                    disableBackdropClick
                    open={this.state.open}
                    onClose={() => this.handleClose()}
                    >
                    <DialogContent>
                        {this.props.message || "Voulez-vous continuer ?"}
                </DialogContent>
                <DialogActions>
                    <Button style={{backgroundColor: "#00000000"}} onClick={() => this.handleClose()} color="default">
                        {this.props.cancelMessage || 'Annuler'}
                    </Button>
                    <Button style={{backgroundColor: "#00000000"}} onClick={() => {
                        this.props.onConfirm();
                        this.handleClose();
                    }}
                    color="default" autoFocus>
                        {this.props.validateMessage || 'Continuer'}
                    </Button>
                  </DialogActions>
                </Dialog>
                {child ||
                <IconButton  style={{backgroundColor: "#FFFFFF00"}} onClick={() => this.handleClickOpen()} color="default">
                    <Icon>{this.props.icon}</Icon>
                </IconButton>
                }
            </div>
        )
    }
}

export default class CreateTemplate extends Component {
    state = {
        items : [
            {name: "Force", type: "caractéristique", value: "", nickname: "F", note: "", testable: true, favorite: true, deletable: false, modifiable: false},
            {name: "Endurance", type: "caractéristique", value: "", nickname: "E", note: "", testable: true, favorite: true, deletable: false, modifiable: false},
            {name: "oui", type: "caractéristique", value: "", nickname: "F", note: "", testable: true, favorite: true, deletable: false, modifiable: false},
            {name: "Natation", type: "compétence", vamue: "", nickname: "", note: "", testable: false, favorite: false, deletable: true, modifiable: true}],
        types : ["caractéristique", "compétence", "inventaire", "divers"],
        name: ["basic"]
    }
    TypeDelete = (type, idx) => {
        const { items } = this.state;
        const { types } = this.state;
        let list = [...items];
        let stl = [...types];
        for (var i = list.length - 1; i--;) {
            if (list[i].type === type)
                list.splice(i, 1);
        }
        stl.splice(idx, 1);
        this.setState({
            items: list,
            types: stl
        })
    }
    ItemAdder = (type) => {
        const { items } = this.state;
        let list = [...items];
        list.push({name:"", type: type, value: "", nickname: "", note: ""})
        this.setState({
            items: list
        });
    }
    ItemDeleter =(idx) => {
        const { items } = this.state;
        let list = [...items];
        list.splice(idx, 1);
        this.setState({
            items: list
        });
    }
    TypeNameHandler = (value, idx) => {
        const { types } = this.state;
        const { items } = this.state;
        let list = [...types];
        let newTab = [...items];
        newTab.map((x) => {
            if (x.type === list[idx])
                x.type = value.target.value;
            return (0);
        });
        list[idx] = value.target.value;
        this.setState({
            types: list,
            items: newTab
        });
    }
    ItemHandler = (item, idx) => {
        const { items } = this.state;
        let list = [...items];
        list[idx] = item;
        this.setState({
            items: list
        });
    }
    ItemTabHandler = (newTab) => {
        this.setState({
            items: newTab
        })
    }
    TypeAdder = () => {
        let tmp = this.state.types
        if (this.state.newType && this.state.types.find(function(element) {
            return element === this.state.newType;
        },this) === undefined) {
            tmp.push(this.state.newType)
            this.setState({
                type: tmp,
                newType: ""
            })
        }
    }
    NameHandler = (newName) => {
        this.setState({
            name: newName.target.value
        })
    }
    render() {
        return (
            <MuiThemeProvider theme={theme}>
            <div>
                <MyBar name={this.state.name} NameHandler={this.NameHandler}
                DeleteFct={() => console.log("del")}
                SaveFct={() => console.log("Save", this.state.items)}
                HelpFct={() => console.log("ALED!")}/>
            <div style={{width:"98%", marginLeft:"1%"}}>
                {this.state.types.map((x, idx) => {
                    return (
                    <div key={idx}>
                        <div className="Type">
                            <TextField margin="normal"
                                value={x}
                                onChange={(value) => this.TypeNameHandler(value, idx)}
                                variant="outlined">
                            </TextField>
                            <MyDialogue message='Le type et tous les éléments associées vont être supprimés'
                            icon="delete" onConfirm={() => this.TypeDelete(x, idx)}/>
                        </div>
                        <IconButton style={{marginLeft: "1%", backgroundColor: "#00000023"}} onClick={() => this.ItemAdder(x)} color="secondary">
                            <Icon>add</Icon>
                        </IconButton>
                        <Type ItemDeleter={this.ItemDeleter} ItemTabHandler={this.ItemTabHandler} ItemHandler={this.ItemHandler} items={this.state.items} type={x}/>
                    </div>
                    )
                })}
                <TextField value={this.state.newType} placeholder="Nouveau type" onSubmit={(event) => {
                    this.setState({
                        newType: event.target.value
                    })
                    this.newTypeField.blur()
                }} onChange={(event) => {
                    this.setState({
                        newType: event.target.value
                    })
                }}>
                </TextField>
                <IconButton style={{backgroundColor:"#00000000"}} onClick={this.TypeAdder} color="secondary">
                    <Icon>add</Icon>
                </IconButton>
            </div>
                </div>
            </MuiThemeProvider>
        )
    }
}