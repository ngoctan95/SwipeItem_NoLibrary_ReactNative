import React,{Component} from 'react';
import {
    ListView,
    ScrollView
} from 'react-native';
import PropTypes from 'prop-types'
import ContactItem from './ContactItem';
const {any} =PropTypes;
/**
 * Initialize data for testing mockup.
 */
const data = [
    {
        id:1,
        name:'Crysfel Villa'
    },
    {
        id:2,
        name:'Stan Bershadkiy'
    }
] 
class ContactList extends Component {
    constructor(props){
        super(props);
        this.ds=new ListView.DataSource({
            rowHasChanged :(r1,r2)=>r1!==r2
        });
        this.state={
            dataSource:this.ds.cloneWithRows(data),
            isSwiping:false
        }
    }
    onToggleSwipe=()=>{
        this.setState({
            isSwiping: !this.state.isSwiping,
        })
        console.log("tggle",this.state.isSwiping);
    }
    /**
     * Idea is find the index for current contact and remove from original list.
     */
    onRemove=(contact)=>{
        const index=data.findIndex((item)=>item.id === contact.id);
        console.log("index",index)
        data.slice(index,1);
        this.setState({
            dataSource:this.ds.cloneWithRows(data),
        })
    }

    _renderItem=(contact)=>{
        return(
        <ContactItem 
            contact={contact}
            onRemove={this.onRemove}
            onDragEnd={this.onToggleSwipe}
            onDrageStart={this.onToggleSwipe}/>
        )
    }
    render(){
       
        const {dataSource,isSwiping}=this.state;
        return(
            <ListView 
                key={data}
                enableEmptySections={true}
                dataSource={dataSource}
                renderScrollComponent={(props)=>
                    <ScrollView {...props}
                                scrollEnabled={!isSwiping}/>}
                renderRow={this._renderItem}/>
        )
    }
}
export default ContactList;