import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class DropdownSambung extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.state = {
      dropdownOpen: false,
      dropdownOpen1: false,
      textDrop2: 'pilih jenjang dulu!',
      jenjang: '',
      tingkat: []
    };
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  toggle1() {
    this.setState(prevState => ({
      dropdownOpen1: !prevState.dropdownOpen1
    }));
  }
  setJenjang(x){
    var listTingkat = {
      pra: ['PAUD (Pendidikan Anak Usia Dini)', 'TK (Taman Kanak-kanak)', 'RA (Raudhatul Athfal)'],
      dasar: ['SD (Sekolah Dasar)', 'MI (Madrasah Ibtidaiyah)', 'SMP (Sekolah Menengah Pertama)', 'MTs (Madrasah Tsanawiyah)'],
      tengah: ['SMA (Sekolah Menengah Atas)', 'MA (Madrasah Aliyah)', 'SMK (Sekolah Menengah Kejuruan)'],
      tinggi: ['D3', 'S1', 'S2', 'S3']
    }

    this.setState({jenjang: x});
    this.setState({textDrop2: 'Pilih Tingkat'});

    if(x === 'pra'){
      this.setState({tingkat: listTingkat.pra});
    }
    else if(x === 'dasar'){
      this.setState({tingkat: listTingkat.dasar});
    }
    else if(x === 'tengah'){
      this.setState({tingkat: listTingkat.tengah});
    }
    else{
      this.setState({tingkat: listTingkat.tinggi});
    }
  }
  render() {
    var listTingkat = this.state.tingkat.map((x,y)=>{
      return <DropdownItem key={y}>{x}</DropdownItem>
    })

    return (
      <div className="pt-5 ml-5">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Pilih Jenjang
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={()=>{this.setJenjang('pra')}}>Pendidikan Pra Sekolah</DropdownItem>
            <DropdownItem onClick={()=>{this.setJenjang('dasar')}}>Pendidikan Dasar</DropdownItem>
            <DropdownItem onClick={()=>{this.setJenjang('tengah')}}>Pendidikan Menengah</DropdownItem>
            <DropdownItem onClick={()=>{this.setJenjang('tinggi')}}>Pendidikan Tinggi</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown isOpen={this.state.dropdownOpen1} toggle={this.toggle1}>
          <DropdownToggle caret>
            {this.state.textDrop2}
          </DropdownToggle>
          <DropdownMenu>
            {listTingkat}
          </DropdownMenu>
        </Dropdown>
        <h1>{this.state.jenjang}</h1>
        <h1>{this.state.tingkat}</h1>
      </div>
    );
  }
}

export default DropdownSambung;
