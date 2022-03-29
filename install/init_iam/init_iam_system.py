# -*- coding: utf-8 -*-
import requests
import os


def init_system_to_iam():
    IAM_HOST = os.getenv("BK_IAM_V3_INNER_HOST", "http://bkiam.service.consul:5001")
    APP_CODE = os.getenv("APP_ID")
    BK_PAAS_HOST = os.getenv("BK_PAAS_HOST")
    SECRET_KEY = os.getenv("APP_TOKEN")
    system_info = {
        "id": APP_CODE,
        "name": "堡垒机",
        "name_en": "bastion",
        "description": "堡垒机",
        "description_en": "bastion",
        "clients": APP_CODE,
        "provider_config": {
            "host": "{}/o/{}/".format(BK_PAAS_HOST, APP_CODE),
            "auth": "basic",
            "healthz": "/healthz/"
        }
    }

    API = "/api/v1/model/systems/"
    URL = IAM_HOST + API
    headers = {
        "X-Bk-App-Code": APP_CODE,
        "X-Bk-App-Secret": SECRET_KEY,
        "Content-Type": "application/json"
    }
    res = requests.post(URL, headers=headers, json=system_info)
    print(res.json())

if __name__ == '__main__':
    init_system_to_iam()

