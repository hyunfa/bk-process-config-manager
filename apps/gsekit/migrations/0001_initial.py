# -*- coding: utf-8 -*-
"""
Tencent is pleased to support the open source community by making 蓝鲸 (Blueking) available.
Copyright (C) 2017-2021 THL A29 Limited, a Tencent company. All rights reserved.
Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
You may obtain a copy of the License at https://opensource.org/licenses/MIT
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
"""
# Generated by Django 2.2.6 on 2020-12-10 08:40

import apps.utils.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="ConfigInstance",
            fields=[
                ("id", models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("config_version_id", models.IntegerField(db_index=True, verbose_name="模板版本ID")),
                ("config_template_id", models.IntegerField(db_index=True, verbose_name="模板ID")),
                ("bk_process_id", models.IntegerField(db_index=True, verbose_name="进程实例ID")),
                ("inst_id", models.IntegerField(db_index=True, verbose_name="实例ID")),
                ("content", apps.utils.models.CompressedTextField(verbose_name="实例内容")),
                ("path", models.CharField(max_length=256, verbose_name="文件绝对路径")),
                ("is_latest", models.BooleanField(db_index=True, default=True, verbose_name="是否最新")),
                ("is_released", models.BooleanField(db_index=True, default=False, verbose_name="是否已发布")),
                ("sha256", models.CharField(max_length=64, verbose_name="SHA256")),
                ("expression", models.CharField(max_length=256, verbose_name="实例表达式")),
                ("created_at", models.DateTimeField(auto_now_add=True, verbose_name="创建时间")),
                ("created_by", models.CharField(default="", max_length=32, verbose_name="创建者")),
            ],
            options={"verbose_name": "配置实例（已渲染）", "verbose_name_plural": "配置实例（已渲染）", "ordering": ["-id"]},
        ),
        migrations.CreateModel(
            name="ConfigTemplateBindingRelationship",
            fields=[
                ("id", models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("created_at", models.DateTimeField(auto_now_add=True, verbose_name="创建时间")),
                ("created_by", models.CharField(default="", max_length=32, verbose_name="创建者")),
                ("updated_at", models.DateTimeField(auto_now=True, null=True, verbose_name="更新时间")),
                ("updated_by", models.CharField(blank=True, default="", max_length=32, verbose_name="修改者")),
                ("bk_biz_id", models.IntegerField(db_index=True, verbose_name="业务ID")),
                ("config_template_id", models.IntegerField(db_index=True, verbose_name="模板ID")),
                (
                    "process_object_type",
                    models.CharField(
                        choices=[("INSTANCE", "进程实例"), ("TEMPLATE", "进程模板")],
                        db_index=True,
                        max_length=16,
                        verbose_name="进程对象类型",
                    ),
                ),
                ("process_object_id", models.IntegerField(db_index=True, verbose_name="进程实例ID/进程模板ID")),
            ],
            options={"verbose_name": "配置模板与进程的绑定关系", "verbose_name_plural": "配置模板与进程的绑定关系"},
        ),
        migrations.CreateModel(
            name="ConfigTemplateVersion",
            fields=[
                ("created_at", models.DateTimeField(auto_now_add=True, verbose_name="创建时间")),
                ("created_by", models.CharField(default="", max_length=32, verbose_name="创建者")),
                ("updated_at", models.DateTimeField(auto_now=True, null=True, verbose_name="更新时间")),
                ("updated_by", models.CharField(blank=True, default="", max_length=32, verbose_name="修改者")),
                ("config_version_id", models.AutoField(primary_key=True, serialize=False, verbose_name="模板版本ID")),
                ("config_template_id", models.IntegerField(db_index=True, verbose_name="模板ID")),
                ("description", models.CharField(blank=True, default="", max_length=256, verbose_name="版本描述")),
                ("content", models.TextField(blank=True, default="", verbose_name="配置模板内容")),
                ("is_draft", models.BooleanField(db_index=True, default=True, verbose_name="是否草稿")),
                ("is_active", models.BooleanField(db_index=True, default=False, verbose_name="是否可用")),
                (
                    "file_format",
                    models.CharField(blank=True, default=None, max_length=16, null=True, verbose_name="文件风格"),
                ),
            ],
            options={"verbose_name": "配置模板版本", "verbose_name_plural": "配置模板版本", "ordering": ["-config_version_id"]},
        ),
        migrations.CreateModel(
            name="Job",
            fields=[
                ("id", models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("bk_biz_id", models.IntegerField(db_index=True, verbose_name="业务ID")),
                ("expression", models.CharField(default="待完善", max_length=256, null=True, verbose_name="实例表达式")),
                ("scope", models.JSONField(default=dict, verbose_name="范围")),
                (
                    "job_object",
                    models.CharField(
                        choices=[("configfile", "配置文件"), ("process", "进程")],
                        db_index=True,
                        max_length=16,
                        verbose_name="任务对象",
                    ),
                ),
                (
                    "job_action",
                    models.CharField(
                        choices=[
                            ("generate", "生成"),
                            ("release", "下发"),
                            ("start", "启动"),
                            ("stop", "停止"),
                            ("restart", "重启"),
                            ("reload", "重载"),
                            ("force_stop", "强制停止"),
                            ("set_auto", "托管"),
                            ("unset_auto", "取消托管"),
                        ],
                        db_index=True,
                        max_length=16,
                        verbose_name="动作",
                    ),
                ),
                (
                    "status",
                    models.CharField(
                        choices=[("pending", "等待中"), ("running", "执行中"), ("succeeded", "执行成功"), ("failed", "执行失败")],
                        db_index=True,
                        default="pending",
                        max_length=16,
                        verbose_name="任务状态",
                    ),
                ),
                ("created_by", models.CharField(db_index=True, max_length=64, verbose_name="执行账户")),
                ("is_ready", models.BooleanField(default=False, verbose_name="是否已准备(子任务是否全部创建完成)")),
                ("start_time", models.DateTimeField(auto_now_add=True, db_index=True, verbose_name="开始时间")),
                ("end_time", models.DateTimeField(null=True, verbose_name="结束时间")),
                ("pipeline_id", models.CharField(db_index=True, max_length=32, verbose_name="PIPELINE ID")),
                ("extra_data", models.JSONField(default=dict, verbose_name="额外数据")),
            ],
            options={"verbose_name": "任务历史", "verbose_name_plural": "任务历史", "ordering": ("-id",)},
        ),
        migrations.CreateModel(
            name="JobProcInstStatusStatistics",
            fields=[
                ("id", models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("job_id", models.IntegerField(db_index=True, verbose_name="任务ID")),
                ("bk_process_id", models.IntegerField(db_index=True, verbose_name="进程ID")),
                ("proc_inst_total_num", models.IntegerField(verbose_name="进程实例数量")),
                ("proc_inst_terminated_num", models.IntegerField(default=0, verbose_name="进程终止数量")),
                ("proc_inst_running_num", models.IntegerField(default=0, verbose_name="进程运行数量")),
                ("proc_inst_auto_num", models.IntegerField(default=0, verbose_name="进程托管数量")),
                ("proc_inst_noauto_num", models.IntegerField(default=0, verbose_name="进程未托管数量")),
            ],
            options={"verbose_name": "任务进程实例状态统计", "verbose_name_plural": "任务进程实例状态统计"},
        ),
        migrations.CreateModel(
            name="JobTask",
            fields=[
                ("id", models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("job_id", models.IntegerField(db_index=True, verbose_name="任务ID")),
                ("bk_process_id", models.IntegerField(db_index=True, verbose_name="进程ID")),
                (
                    "status",
                    models.CharField(
                        choices=[("pending", "等待中"), ("running", "执行中"), ("succeeded", "执行成功"), ("failed", "执行失败")],
                        db_index=True,
                        default="pending",
                        max_length=16,
                        verbose_name="任务状态",
                    ),
                ),
                ("start_time", models.DateTimeField(auto_now_add=True, db_index=True, verbose_name="开始时间")),
                ("end_time", models.DateTimeField(null=True, verbose_name="结束时间")),
                ("pipeline_id", models.CharField(db_index=True, max_length=32, verbose_name="PIPELINE ID")),
                ("extra_data", models.JSONField(default=dict, verbose_name="额外数据")),
            ],
            options={"verbose_name": "任务详情", "verbose_name_plural": "任务详情"},
        ),
        migrations.CreateModel(
            name="Process",
            fields=[
                ("id", models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("bk_biz_id", models.IntegerField(db_index=True, verbose_name="业务ID")),
                ("expression", models.CharField(db_index=True, default="待完善", max_length=256, verbose_name="实例表达式")),
                ("bk_host_innerip", models.GenericIPAddressField(db_index=True, verbose_name="主机IP")),
                ("bk_cloud_id", models.IntegerField(db_index=True, verbose_name="云区域ID")),
                (
                    "bk_set_env",
                    models.CharField(
                        choices=[("0", "全部"), ("1", "测试"), ("2", "体验"), ("3", "正式")],
                        db_index=True,
                        max_length=4,
                        verbose_name="集群环境类型",
                    ),
                ),
                ("bk_set_id", models.IntegerField(db_index=True, verbose_name="集群ID")),
                ("bk_module_id", models.IntegerField(db_index=True, verbose_name="模块ID")),
                (
                    "service_template_id",
                    models.IntegerField(blank=True, db_index=True, null=True, verbose_name="服务模板ID"),
                ),
                ("service_instance_id", models.IntegerField(db_index=True, verbose_name="服务实例ID")),
                (
                    "bk_process_name",
                    models.CharField(blank=True, db_index=True, max_length=64, null=True, verbose_name="进程名称"),
                ),
                ("bk_process_id", models.IntegerField(db_index=True, verbose_name="进程ID")),
                ("process_template_id", models.IntegerField(db_index=True, verbose_name="进程模板ID")),
                ("process_status", models.IntegerField(db_index=True, default=0, verbose_name="进程状态")),
                ("is_auto", models.BooleanField(db_index=True, default=False, verbose_name="托管状态")),
            ],
            options={"verbose_name": "业务进程缓存", "verbose_name_plural": "业务进程缓存"},
        ),
        migrations.CreateModel(
            name="ProcessInst",
            fields=[
                ("id", models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("bk_biz_id", models.IntegerField(db_index=True, verbose_name="业务ID")),
                ("bk_host_num", models.IntegerField(db_index=True, verbose_name="主机编号")),
                ("bk_host_innerip", models.GenericIPAddressField(db_index=True, verbose_name="主机IP")),
                ("bk_cloud_id", models.IntegerField(db_index=True, verbose_name="云区域ID")),
                ("bk_process_id", models.IntegerField(db_index=True, verbose_name="进程ID")),
                ("bk_module_id", models.IntegerField(db_index=True, verbose_name="模块ID")),
                ("bk_process_name", models.CharField(db_index=True, max_length=64, verbose_name="进程名称")),
                ("inst_id", models.IntegerField(db_index=True, verbose_name="InstID")),
                ("process_status", models.IntegerField(db_index=True, default=0, verbose_name="进程状态")),
                ("is_auto", models.BooleanField(db_index=True, default=False, verbose_name="托管状态")),
                ("local_inst_id", models.IntegerField(db_index=True, verbose_name="LocalInstID")),
                (
                    "local_inst_id_uniq_key",
                    models.CharField(db_index=True, default="", max_length=256, verbose_name="进程实例唯一标识"),
                ),
                ("proc_num", models.IntegerField(default=1, verbose_name="启动数量")),
            ],
            options={
                "verbose_name": "InstID",
                "verbose_name_plural": "InstID",
                "unique_together": {
                    ("bk_host_innerip", "bk_cloud_id", "bk_process_name", "local_inst_id"),
                    ("bk_module_id", "bk_process_name", "inst_id"),
                },
            },
        ),
        migrations.CreateModel(
            name="ConfigTemplate",
            fields=[
                ("created_at", models.DateTimeField(auto_now_add=True, verbose_name="创建时间")),
                ("created_by", models.CharField(default="", max_length=32, verbose_name="创建者")),
                ("updated_at", models.DateTimeField(auto_now=True, null=True, verbose_name="更新时间")),
                ("updated_by", models.CharField(blank=True, default="", max_length=32, verbose_name="修改者")),
                ("config_template_id", models.AutoField(primary_key=True, serialize=False, verbose_name="模板ID")),
                ("bk_biz_id", models.IntegerField(db_index=True, verbose_name="业务ID")),
                ("template_name", models.CharField(db_index=True, max_length=32, verbose_name="模板名称")),
                ("file_name", models.CharField(max_length=64, verbose_name="文件名称")),
                ("abs_path", models.CharField(max_length=256, verbose_name="文件绝对路径")),
                ("owner", models.CharField(max_length=32, verbose_name="文件所有者")),
                ("group", models.CharField(max_length=32, verbose_name="文件归属群组")),
                ("filemode", models.CharField(max_length=8, verbose_name="文件权限")),
                (
                    "line_separator",
                    models.CharField(
                        choices=[("CR", "MacOs(\\r)"), ("LF", "Unix(\\n)"), ("CRLF", "Windows(\\r\\n)")],
                        max_length=8,
                        verbose_name="换行符格式",
                    ),
                ),
            ],
            options={
                "verbose_name": "配置模板",
                "verbose_name_plural": "配置模板",
                "ordering": ["-config_template_id"],
                "unique_together": {("bk_biz_id", "template_name")},
            },
        ),
        migrations.CreateModel(
            name="BscpConfig",
            fields=[
                ("app_id", models.CharField(db_index=True, max_length=64, verbose_name="BSCP应用ID")),
                ("config_template_id", models.IntegerField(db_index=True, verbose_name="模板ID")),
                ("cfg_id", models.CharField(max_length=64, primary_key=True, serialize=False, verbose_name="BSCP配置ID")),
            ],
            options={
                "verbose_name": "BSCP配置",
                "verbose_name_plural": "BSCP配置",
                "db_table": "bscp_config",
                "unique_together": {("app_id", "config_template_id")},
            },
        ),
        migrations.CreateModel(
            name="BscpApplication",
            fields=[
                ("biz_id", models.IntegerField(db_index=True, verbose_name="业务ID")),
                (
                    "biz_name",
                    models.CharField(max_length=64, primary_key=True, serialize=False, verbose_name="BSCP业务ID"),
                ),
                ("app_id", models.CharField(db_index=True, max_length=64, verbose_name="BSCP应用ID")),
                (
                    "process_object_type",
                    models.CharField(
                        choices=[("INSTANCE", "进程实例"), ("TEMPLATE", "进程模板")],
                        db_index=True,
                        max_length=16,
                        verbose_name="进程对象类型",
                    ),
                ),
                ("process_object_id", models.IntegerField(db_index=True, verbose_name="进程实例ID/进程模板ID")),
            ],
            options={
                "verbose_name": "BSCP应用",
                "verbose_name_plural": "BSCP应用",
                "db_table": "bscp_application",
                "unique_together": {("app_id", "process_object_type", "process_object_id")},
            },
        ),
    ]