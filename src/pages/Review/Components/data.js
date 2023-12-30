// export const data = [
//     {
//         "name": "Nguyen Thi An",
//         "star": 3,
//         "createdAt": "2023/07/20",
//         "price": "mắc",
//         "website":"khó sử dụng",
//         "customerCare": "kém",
//         "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
//     },
//     {
//         "name": "Ha Van Han",
//         "star": 5,
//         "createdAt": "2023/07/20",
//         "price": "mắc",
//         "website":"đẹp, không đặt được vé",
//         "customerCare": "tạm tạm",
//         "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
//     },
//     {
//         "name": "Ha Van Han",
//         "star": 0,
//         "createdAt": "2023/07/20",
//         "price": "mắc",
//         "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
//     }
// ]

export const dataTest = [
    {
        "id": 1,
        "content": "Tôi đã xem trên website trước khi đến thăm Dinh Độc Lập, website thiết kế rất rõ ràng, có hình ảnh 3D sinh động giúp tôi hiểu rõ hơn về Dinh Độc Lập. Cần cải thiện thêm về chăm sóc khách hàng.",
        "rate": 2,
        "dateReview": "2023-12-02T04:09:11.000+00:00",
        "user": {
            "id": 1,
            "name": "Anh Thư",
            "email": "123@gmail.com",
            "phone": "0123"
        },
        "details": [
            {
                "id": 4,
                "tagRate": {
                    "id": 3,
                    "rate": 3,
                    "content": "chưa tốt",
                    "tag": {
                        "id": 2,
                        "name": "Chăm sóc khách hàng"
                    }
                }
            },
            {
                "id": 5,
                "tagRate": {
                    "id": 6,
                    "rate": 1,
                    "content": "cao",
                    "tag": {
                        "id": 1,
                        "name": "Giá vé"
                    }
                }
            }
        ]
    },
    {
        "id": 3,
        "content": "Tôi đã có trải nghiệm tham quan tuyệt vời tại Dinh Độc Lập, rất thích hợp để đi chơi cùng với gia đình vào dịp cuối tuần. Tôi và gia đình tìm hiểu thêm được nhiều thông tin bổ ích.",
        "rate": 3,
        "dateReview": "2023-12-02T17:10:29.000+00:00",
        "user": {
            "id": 1,
            "name": "Lê Văn Thiện",
            "email": "123@gmail.com",
            "phone": "0123"
        },
        "details": [
            {
                "id": 6,
                "tagRate": {
                    "id": 7,
                    "rate": 2,
                    "content": "cao",
                    "tag": {
                        "id": 1,
                        "name": "Giá vé"
                    }
                }
            },
            {
                "id": 7,
                "tagRate": {
                    "id": 15,
                    "rate": 5,
                    "content": "dễ sử dụng",
                    "tag": {
                        "id": 3,
                        "name": "Website"
                    }
                }
            },
            {
                "id": 8,
                "tagRate": {
                    "id": 4,
                    "rate": 4,
                    "content": "khá tốt",
                    "tag": {
                        "id": 2,
                        "name": "Chăm sóc khách hàng"
                    }
                }
            }
        ]
    }
]
