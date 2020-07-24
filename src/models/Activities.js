import Calendar from 'react-calendar';
import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import compareAndList from '../misc/helpers';

export default class Activities extends Component {
        state = {
            modalVisibility: this.props.info.modalVisibility,
            activity_periods: this.props.info.activity
        };

        onChange = async (selectedDate) => {
            await compareAndList(this.state.activity_periods, selectedDate)
        }

    render() {
        return (
            <div class="container">
                <div class="container">
                    <h4 id="content" class="set-top-alert text-info"></h4>
                </div>
                <h8 class="text-muted">Pick date to show the time ranges for this date. </h8>
                <Calendar
                onChange={this.onChange}
                value={this.state.date}
                />
            </div>
        )
    }
}
