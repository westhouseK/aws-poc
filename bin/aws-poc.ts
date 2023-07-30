#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsPocStack } from '../lib/aws-poc-stack';

const app = new cdk.App();
new AwsPocStack(app, 'AwsPocStack');
