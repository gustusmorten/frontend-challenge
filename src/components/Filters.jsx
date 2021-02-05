import React, { useState } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCharactersFilters } from '../reducers/characters';
import { filterCharacters } from '../actions/characters';




const Filters = ({ filters, ...props }) => {
    const [activeTab, setActiveTab] = useState("house");

    function handleSearch(event){
        props.filterCharacters({name: event.target.value});
    }

    const hanndleCheck = (filter) => {
        props.filterCharacters(filter);
    }

    return (
        <nav className="panel">
            <p className="panel-heading has-text-weight-semibold has-text-white">
                Filters
            </p>

            <div className="panel-block">
                <p className="control has-icons-left">
                    <input className="input" type="text" placeholder="Search" onChange={handleSearch}/>
                    <span className="icon is-left">
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </span>
                </p>
            </div>

            <div className="panel-tabs tabs is-small is-boxed">
                <ul>
                    <li className={activeTab === "house" && "is-active"}>
                        <Link onClick={() => setActiveTab(activeTab => "house")}>
                            <span>House</span>
                        </Link>
                    </li>
                    <li className={activeTab === "ancestry" && "is-active"}>
                        <Link onClick={() => setActiveTab(activeTab => "ancestry")}>
                            <span>Blood status</span>
                        </Link>
                    </li>
                    <li className={activeTab === "alive" && "is-active"}>
                        <Link onClick={() => setActiveTab(activeTab => "alive")}>
                            <span>Status</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={activeTab != "house" && "is-hidden"}>
                <div className="panel-block">
                    <label className="checkbox">
                        <input type="checkbox" defaultChecked={filters.gryffindor} onChange={(event) => hanndleCheck({gryffindor: !filters.gryffindor})}/>
                        Gryffindor
                    </label>
                </div>
                <div className="panel-block">
                    <label className="checkbox">
                        <input type="checkbox" defaultChecked={filters.slytherin} onChange={(event) => hanndleCheck({slytherin: !filters.slytherin})} />
                        Slytherin
                    </label>
                </div>
                <div className="panel-block">
                    <label className="checkbox">
                        <input type="checkbox" defaultChecked={filters.ravenclaw} onChange={(event) => hanndleCheck({ravenclaw: !filters.ravenclaw})} />
                        Ravenclaw
                    </label>
                </div>
                <div className="panel-block">
                    <label className="checkbox">
                        <input type="checkbox" defaultChecked={filters.hufflepuff} onChange={(event) => hanndleCheck({hufflepuff: !filters.hufflepuff})} />
                        Hufflepuff
                    </label>
                </div>
                <div className="panel-block">
                    <label className="checkbox">
                        <input type="checkbox" defaultChecked={filters.others} onChange={(event) => hanndleCheck({others: !filters.others})} />
                        Others
                    </label>
                </div>
            </div>
            <div className={activeTab != "ancestry" && "is-hidden"}>
                <div className="panel-block">
                    <label className="checkbox">
                        <input type="checkbox" defaultChecked={filters.pure_blood} onChange={(event) => hanndleCheck({pure_blood: !filters.pure_blood})} />
                        pure-blood
                    </label>
                </div>
                <div className="panel-block">
                    <label className="checkbox">
                        <input type="checkbox" defaultChecked={filters.half_blood} onChange={(event) => hanndleCheck({half_blood: !filters.half_blood})} />
                        half-blood
                    </label>
                </div>
                <div className="panel-block">
                    <label className="checkbox">
                        <input type="checkbox" defaultChecked={filters.muggleborn} onChange={(event) => hanndleCheck({muggleborn: !filters.muggleborn})} />
                        muggleborn
                    </label>
                </div>
            </div>
            <div className={activeTab != "alive" && "is-hidden"}>
                <div className="panel-block">
                    <label className="checkbox">
                        <input type="checkbox" defaultChecked={filters.live} onChange={(event) => hanndleCheck({live: !filters.live})}  />
                        Live
                    </label>
                </div>
                <div className="panel-block">
                    <label className="checkbox">
                        <input type="checkbox" defaultChecked={filters.dead} onChange={(event) => hanndleCheck({dead: !filters.dead})}  />
                        Dead
                    </label>
                </div>
            </div>
        </nav>
    )

}

const mapStateToProps = state => {
    return {
        filters: getCharactersFilters(state)
    };
};

const mapDispatchToProps = {
    filterCharacters
};


export default connect(mapStateToProps, mapDispatchToProps)(Filters);