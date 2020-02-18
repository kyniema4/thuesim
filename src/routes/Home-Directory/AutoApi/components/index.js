import React from 'react';
import { connect } from 'dva';
import { Layout, Timeline, Icon } from 'antd';
import intl from 'react-intl-universal';
import Panel from '../../../../components/Panel';
import BaseComponent from '../../../../components/BaseComponent';
import messages from '../messages';
import './index.less';
const { Content } = Layout;

@connect()
export default class extends BaseComponent {
  render() {
    return (
      <Layout className="full-layout page autoapi-page">
        <Content>
        <Panel title="API" address="Auto Mation Tool">
        <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="header-title mt-0 mb-5">Horizontal Timeline</h4>
                                        
                                        <div class="hori-timeline">
                                            <ul class="list-inline events">
                                                <li class="list-inline-item event-list">
                                                    <div class="px-4">
                                                        <div class="event-date bg-lighten-primary text-primary">2 June</div>
                                                        <h5 class="font-16">Event One</h5>
                                                        <p class="text-muted">It will be as simple as occidental in fact it will be Occidental Cambridge friend</p>
                                                        <div>
                                                            <a href="#" class="btn btn-primary btn-sm">Read more</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-inline-item event-list">
                                                    <div class="px-4">
                                                        <div class="event-date bg-lighten-success text-success">5 June</div>
                                                        <h5 class="font-16">Event Two</h5>
                                                        <p class="text-muted">Everyone realizes why a new common language one could refuse translators.</p>
                                                        <div>
                                                            <a href="#" class="btn btn-primary btn-sm">Read more</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-inline-item event-list">
                                                    <div class="px-4">
                                                        <div class="event-date bg-lighten-danger text-danger">7 June</div>
                                                        <h5 class="font-16">Event Three</h5>
                                                        <p class="text-muted">If several languages coalesce the grammar of the resulting simple and regular</p>
                                                        <div>
                                                            <a href="#" class="btn btn-primary btn-sm">Read more</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-inline-item event-list">
                                                    <div class="px-4">
                                                        <div class="event-date bg-lighten-warning text-warning">8 June</div>
                                                        <h5 class="font-16">Event Four</h5>
                                                        <p class="text-muted">Languages only differ in their pronunciation and their most common words.</p>
                                                        <div>
                                                            <a href="#" class="btn btn-primary btn-sm">Read more</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
          <Timeline mode="alternate">
            {/* <Timeline.Item>Create a services site 2015-09-01</Timeline.Item> */}
            <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </Timeline.Item>
            <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
              Technical testing 2015-09-01
            </Timeline.Item>
          </Timeline>
        </Panel>
      
        
        </Content>
      </Layout>
    );
  }
}
