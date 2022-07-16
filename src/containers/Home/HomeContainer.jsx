import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapActions, mapStateToProps } from '../../store/index'
import PropTypes from 'prop-types'
import HomeComponent from '../../components/Home/HomeComponent'

export default connect(
    mapStateToProps('product'),
    mapActions('fetchProduct')
)(
    class HomeContainer extends Component {
        static propTypes = {
            product: PropTypes.object,
            fetchProduct: PropTypes.func
        }

        constructor(props) {
            super(props)
            this.state = {
                queries : {
                    limit: 5,
                    status: 'asc'
                }
            }
        }

        async componentDidMount() {
            await this.props.fetchProduct(this.state.queries)
        }

        render() {
            return (
                <HomeComponent
                    {...this.state}
                    {...this.props}
                />
            )
        }
    }
)