import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../reducers';
import { Card } from '../lib/card';
import { Profile } from '../../types';

// functional component to display feed of all DALI members with search & filter functionality
export const Feed:FC = () => {

    // set local state with useState hooks
    const [role, setRole] = useState<string>('all');
    const [searchParam, setSearchParam] = useState<string>('name');
    const [searchInput, setSearchInput] = useState<string>('');

    // grab redux state with useSelector hook
    const people = useSelector((state:RootState) => state.people.people);

    if (role !== 'all'){
        return (
            <div className="feed">
                <div className="card" id="feed-title">
                    <div className="row-container" id="feed-title-container">
                        <h1>
                            MEET THE MEMBERS
                        </h1>
                        <div className="row-container">
                            <label htmlFor="params" className="label">Search by:</label>
                            <div className="select">
                                <select name="params" value={searchParam} id="params" onChange={(event) => {
                                    setSearchParam(event.target.value);
                                    setSearchInput('');
                                }}>
                                    <option value="name">Name</option>
                                    <option value="home">Hometown</option>
                                    <option value="quote">Quote</option>
                                    <option value="year">Year</option>
                                </select>
                            </div>
                            <input value={searchInput} type="text" id="search" name="search" onChange={(event) => setSearchInput(event.target.value)} />
                        </div>
                        <div className="row-container">
                            <label htmlFor="roles" className="label">Filter by role:</label>
                            <div className="select">
                                <select name="roles" value={role} id="roles" onChange={(event) => setRole(event.target.value)}>
                                    <option value="all">All</option>
                                    <option value="Designer">Designer</option>
                                    <option value="Project Manager">Product Manager</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Videographer">Videographer</option>
                                    <option value="Core">Core</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                {people.filter(profile => profile.role.includes(role))
                .filter((profile) => {
                    const p:Profile = profile;
                    const key = searchParam;
                    return p[key].toLowerCase().includes(searchInput.toLowerCase());
                }).map((profile) => (
                    <Card name={profile.name} 
                    quote={profile.quote} 
                    year={profile.year} 
                    gender={profile.gender} 
                    home={profile.home} 
                    role={profile.role} 
                    picture={profile.picture}
                    key={profile.name}
                    follow={profile.follow} />
                ))}
            </div>
        );
    } else {
        return (
            <div className="feed">
                <div className="card" id="feed-title">
                    <div className="row-container" id="feed-title-container">
                        <h1>
                            MEET THE MEMBERS
                        </h1>
                        <div className="row-container">
                            <label htmlFor="params" className="label">Search by:</label>
                            <div className="select">
                                <select name="params" value={searchParam} id="params" onChange={(event) => {
                                    setSearchParam(event.target.value);
                                    setSearchInput('');
                                }}>
                                    <option value="name">Name</option>
                                    <option value="home">Hometown</option>
                                    <option value="quote">Quote</option>
                                    <option value="year">Year</option>
                                </select>
                            </div>
                            <input value={searchInput} type="text" id="search" name="search" onChange={(event) => setSearchInput(event.target.value)} />
                        </div>
                        <div className="row-container">
                            <label htmlFor="roles" className="label">Filter by role:</label>
                            <div className="select">
                                <select name="roles" value={role} id="roles" onChange={(event) => setRole(event.target.value)}>
                                    <option value="all">All</option>
                                    <option value="Designer">Designer</option>
                                    <option value="Project Manager">Product Manager</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Videographer">Videographer</option>
                                    <option value="Core">Core</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                {people.filter((profile) => {
                    const p:Profile = profile;
                    const key = searchParam;
                    return p[key].toLowerCase().includes(searchInput.toLowerCase());
                }).map((profile) => (
                    <Card name={profile.name} 
                    quote={profile.quote} 
                    year={profile.year} 
                    gender={profile.gender} 
                    home={profile.home} 
                    role={profile.role} 
                    picture={profile.picture}
                    key={profile.name}
                    follow={profile.follow} />
                ))}
            </div>
        );
    }   
};