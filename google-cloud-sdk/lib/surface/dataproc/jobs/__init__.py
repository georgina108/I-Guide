# -*- coding: utf-8 -*- #
# Copyright 2015 Google Inc. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""The command group for cloud dataproc jobs."""

from __future__ import absolute_import
from __future__ import unicode_literals
from googlecloudsdk.calliope import actions
from googlecloudsdk.calliope import base
from googlecloudsdk.core import properties


@base.ReleaseTracks(base.ReleaseTrack.BETA, base.ReleaseTrack.GA)
class Jobs(base.Group):
  """Submit and manage Google Cloud Dataproc jobs.

  Submit and manage Google Cloud Dataproc jobs.

  ## EXAMPLES

  To learn about the types of jobs that can be submitted, run:

    $ {command} submit

  To view the output of a job as it runs, run:

    $ {command} wait job_id

  To cancel an active job, run:

    $ {command} kill job_id

  To view the details of a job, run:

    $ {command} describe job_id

  To see the list of all jobs, run:

    $ {command} list

  To delete the record of an inactive job, run:

    $ {command} delete job_id
  """

  @classmethod
  def Args(cls, parser):
    if cls.ReleaseTrack() != base.ReleaseTrack.BETA:
      return
    region_prop = properties.VALUES.dataproc.region
    parser.add_argument(
        '--region',
        help=region_prop.help_text,
        # Don't set default, because it would override users' property setting.
        action=actions.StoreProperty(region_prop))
