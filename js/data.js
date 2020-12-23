let dataMovies = [
    {
        'id': '1',
        'label': 'BHD Star',
        'cinema': 'Bitexco',
        'image': 'ss1.jpg',
        'address': 'L3-Bitexco Icon 68, 2 Hải Triều, Q.1',
        'details': [
            {
                'film_title': 'Tiệc Trăng Máu - Blood Moon Party',
                'film_label': 'C18',
                'film_image': 'f1.png',
                'film_info': '100 phút - TIX 9.3 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00', '17:40 ~ 19:20', '20:00 ~ 21:40', '21:40 ~ 23:20']
            },
            {
                'film_title': 'Sài Gòn Trong Cơn Mưa - Saigon In The Rain',
                'film_label': 'C16',
                'film_image': 'f2.png',
                'film_info': '105 phút - TIX 8.7 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00', '17:40 ~ 19:20']
            },
            {
                'film_title': 'Kỳ Nghỉ Nhớ Đời - Golden Holiday',
                'film_label': 'C16',
                'film_image': 'f3.png',
                'film_info': '106 phút - TIX 6.1 - IMDb 0',
                'film_time': ['12:45 ~ 14:25']
            },
            {
                'film_title': 'Phù Thủy, Phù Thủy - The Witches',
                'film_label': 'P',
                'film_image': 'f4.png',
                'film_info': '106 phút - TIX 8.2 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            },
            {
                'film_title': 'Đừng Gọi Anh Là Bố - My God! Father',
                'film_label': 'C16',
                'film_image': 'f5.png',
                'film_info': '104 phút - TIX 5.2 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            },
            {
                'film_title': 'Kiếm Khách - The Swordsman',
                'film_label': 'C18',
                'film_image': 'f6.png',
                'film_info': '100 phút - TIX 8.7 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            },
            {
                'film_title': 'Phù Thủy, Phù Thủy - The Witches',
                'film_label': 'P',
                'film_image': 'f4.png',
                'film_info': '106 phút - TIX 8.2 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            },
            {
                'film_title': 'Liên Quân Siêu Thú - Stardog and Turbocat',
                'film_label': 'P',
                'film_image': 'f8.png',
                'film_info': '90 phút - TIX 5.5 - IMDb 0',
                'film_time': ['12:45 ~ 14:25']
            },
        ]
    },
    {
        'id': '2',
        'label': 'BHD Star',
        'cinema': 'Vincom Thảo',
        'image': 'ss2.jpg',
        'address': 'L5-Megamall, 159 XL Hà Nội, Q.2',
        'details': [
            {
                'film_title': 'Tiệc Trăng Máu - Blood Moon Party',
                'film_label': 'C18',
                'film_image': 'f1.png',
                'film_info': '100 phút - TIX 9.3 - IMDb 0',
                'film_time': ['20:00 ~ 21:40', '21:40 ~ 23:20']
            },
            {
                'film_title': 'Sài Gòn Trong Cơn Mưa - Saigon In The Rain',
                'film_label': 'C16',
                'film_image': 'f2.png',
                'film_info': '105 phút - TIX 8.7 - IMDb 0',
                'film_time': ['21:40 ~ 23:25']
            },
            {
                'film_title': 'Phù Thủy, Phù Thủy - The Witches',
                'film_label': 'P',
                'film_image': 'f4.png',
                'film_info': '106 phút - TIX 8.2 - IMDb 0',
                'film_time': ['19:35 ~ 21:21']
            },
            {
                'film_title': 'Liên Quân Siêu Thú - Stardog and Turbocat',
                'film_label': 'P',
                'film_image': 'f8.png',
                'film_info': '90 phút - TIX 5.5 - IMDb 0',
                'film_time': ['19:50 ~ 21:20']
            },
            {
                'film_title': 'Kiếm Khách - The Swordsman',
                'film_label': 'C18',
                'film_image': 'f6.png',
                'film_info': '100 phút - TIX 8.7 - IMDb 0',
                'film_time': ['20:30 ~ 21:10', '22:25 ~ 00:05']
            },
            {
                'film_title': 'Thanh Âm Trong Mắt Em - Your Eyes Tell ',
                'film_label': 'C16',
                'film_image': 'f9.png',
                'film_info': '123 phút - TIX 8.5 - IMDb 0',
                'film_time': ['21:35 ~ 23:38']
            },
        ]
    },
    {
        'id': '3',
        'label': 'BHD Star',
        'cinema': 'Vincom 3/2',
        'image': 'ss3.jpg',
        'address': 'L5-Vincom 3/2, 3C Đường 3/2, Q.10',
        'details': [
            {
                'film_title': 'Kiếm Khách - The Swordsman',
                'film_label': 'C18',
                'film_image': 'f6.png',
                'film_info': '100 phút - TIX 8.7 - IMDb 0',
                'film_time': ['20:30 ~ 21:10', '22:25 ~ 00:05']
            },
            {
                'film_title': 'Liên Quân Siêu Thú - Stardog and Turbocat',
                'film_label': 'P',
                'film_image': 'f8.png',
                'film_info': '90 phút - TIX 5.5 - IMDb 0',
                'film_time': ['19:50 ~ 21:20']
            },
            {
                'film_title': 'Sài Gòn Trong Cơn Mưa - Saigon In The Rain',
                'film_label': 'C16',
                'film_image': 'f2.png',
                'film_info': '105 phút - TIX 8.7 - IMDb 0',
                'film_time': ['21:40 ~ 23:25']
            },
            {
                'film_title': 'Tiệc Trăng Máu - Blood Moon Party',
                'film_label': 'C18',
                'film_image': 'f1.png',
                'film_info': '100 phút - TIX 9.3 - IMDb 0',
                'film_time': ['20:00 ~ 21:40', '21:40 ~ 23:20']
            },
            {
                'film_title': 'Phù Thủy, Phù Thủy - The Witches',
                'film_label': 'P',
                'film_image': 'f4.png',
                'film_info': '106 phút - TIX 8.2 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            }
        ]
    },
    {
        'id': '4',
        'label': 'BHD Star',
        'cinema': 'Phạm Hùng',
        'image': 'ss4.jpg',
        'address': 'L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh',
        'details': [
            {
                'film_title': 'Liên Quân Siêu Thú - Stardog and Turbocat',
                'film_label': 'P',
                'film_image': 'f8.png',
                'film_info': '90 phút - TIX 5.5 - IMDb 0',
                'film_time': ['12:45 ~ 14:25']
            },
            {
                'film_title': 'Kiếm Khách - The Swordsman',
                'film_label': 'C18',
                'film_image': 'f6.png',
                'film_info': '100 phút - TIX 8.7 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            },
            {
                'film_title': 'Tiệc Trăng Máu - Blood Moon Party',
                'film_label': 'C18',
                'film_image': 'f1.png',
                'film_info': '100 phút - TIX 9.3 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00', '17:40 ~ 19:20', '20:00 ~ 21:40', '21:40 ~ 23:20']
            },
            {
                'film_title': 'Kỳ Nghỉ Nhớ Đời - Golden Holiday',
                'film_label': 'C16',
                'film_image': 'f3.png',
                'film_info': '106 phút - TIX 6.1 - IMDb 0',
                'film_time': ['12:45 ~ 14:25']
            }
        ]
    },
    {
        'id': '5',
        'label': 'CNS',
        'cinema': 'Hai Bà Trưng',
        'image': 'ss5.jpg',
        'address': '135 Hai Bà Trưng, Bến Nghé, Q.1',
        'details': [
            {
                'film_title': 'Tiệc Trăng Máu - Blood Moon Party',
                'film_label': 'C18',
                'film_image': 'f1.png',
                'film_info': '100 phút - TIX 9.3 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00', '17:40 ~ 19:20', '20:00 ~ 21:40', '21:40 ~ 23:20']
            },
            {
                'film_title': 'Phù Thủy, Phù Thủy - The Witches',
                'film_label': 'P',
                'film_image': 'f4.png',
                'film_info': '106 phút - TIX 8.2 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            },
            {
                'film_title': 'Kỳ Nghỉ Nhớ Đời - Golden Holiday',
                'film_label': 'C16',
                'film_image': 'f3.png',
                'film_info': '106 phút - TIX 6.1 - IMDb 0',
                'film_time': ['12:45 ~ 14:25']
            },
            {
                'film_title': 'Sài Gòn Trong Cơn Mưa - Saigon In The Rain',
                'film_label': 'C16',
                'film_image': 'f2.png',
                'film_info': '105 phút - TIX 8.7 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00', '17:40 ~ 19:20']
            }
        ]
    },
    {
        'id': '6',
        'label': 'CNS',
        'cinema': 'Quốc Thanh',
        'image': 'ss6.jpg',
        'address': '271 Nguyễn Trãi, Q.1',
        'details': [
            {
                'film_title': 'Phù Thủy, Phù Thủy - The Witches',
                'film_label': 'P',
                'film_image': 'f4.png',
                'film_info': '106 phút - TIX 8.2 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            },
            {
                'film_title': 'Sài Gòn Trong Cơn Mưa - Saigon In The Rain',
                'film_label': 'C16',
                'film_image': 'f2.png',
                'film_info': '105 phút - TIX 8.7 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00', '17:40 ~ 19:20']
            },
            {
                'film_title': 'Kỳ Nghỉ Nhớ Đời - Golden Holiday',
                'film_label': 'C16',
                'film_image': 'f3.png',
                'film_info': '106 phút - TIX 6.1 - IMDb 0',
                'film_time': ['12:45 ~ 14:25']
            },
            {
                'film_title': 'Tiệc Trăng Máu - Blood Moon Party',
                'film_label': 'C18',
                'film_image': 'f1.png',
                'film_info': '100 phút - TIX 9.3 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00', '17:40 ~ 19:20', '20:00 ~ 21:40', '21:40 ~ 23:20']
            },
        ]
    },
    {
        'id': '7',
        'label': 'DDC',
        'cinema': 'Đống Đa',
        'image': 'ss7.jpg',
        'address': '890 Trần Hưng Đạo, Q.5',
        'details': [
            {
                'film_title': 'Sài Gòn Trong Cơn Mưa - Saigon In The Rain',
                'film_label': 'C16',
                'film_image': 'f2.png',
                'film_info': '105 phút - TIX 8.7 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00', '17:40 ~ 19:20']
            },
            {
                'film_title': 'Phù Thủy, Phù Thủy - The Witches',
                'film_label': 'P',
                'film_image': 'f4.png',
                'film_info': '106 phút - TIX 8.2 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            },
            {
                'film_title': 'Tiệc Trăng Máu - Blood Moon Party',
                'film_label': 'C18',
                'film_image': 'f1.png',
                'film_info': '100 phút - TIX 9.3 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00', '17:40 ~ 19:20', '20:00 ~ 21:40', '21:40 ~ 23:20']
            },
            {
                'film_title': 'Kỳ Nghỉ Nhớ Đời - Golden Holiday',
                'film_label': 'C16',
                'film_image': 'f3.png',
                'film_info': '106 phút - TIX 6.1 - IMDb 0',
                'film_time': ['12:45 ~ 14:25']
            },
        ]
    },
    {
        'id': '8',
        'label': 'MegaGS',
        'cinema': 'Cao Thắng',
        'image': 'ss8.jpg',
        'address': '19 Cao Thắng, Q.3',
        'details': [
            {
                'film_title': 'Kỳ Nghỉ Nhớ Đời - Golden Holiday',
                'film_label': 'C16',
                'film_image': 'f3.png',
                'film_info': '106 phút - TIX 6.1 - IMDb 0',
                'film_time': ['12:45 ~ 14:25']
            },
            {
                'film_title': 'Phù Thủy, Phù Thủy - The Witches',
                'film_label': 'P',
                'film_image': 'f4.png',
                'film_info': '106 phút - TIX 8.2 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            },
            {
                'film_title': 'Tiệc Trăng Máu - Blood Moon Party',
                'film_label': 'C18',
                'film_image': 'f1.png',
                'film_info': '100 phút - TIX 9.3 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00', '17:40 ~ 19:20', '20:00 ~ 21:40', '21:40 ~ 23:20']
            },
            {
                'film_title': 'Sài Gòn Trong Cơn Mưa - Saigon In The Rain',
                'film_label': 'C16',
                'film_image': 'f2.png',
                'film_info': '105 phút - TIX 8.7 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00', '17:40 ~ 19:20']
            },
            {
                'film_title': 'Kiếm Khách - The Swordsman',
                'film_label': 'C18',
                'film_image': 'f6.png',
                'film_info': '100 phút - TIX 8.7 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            },
            {
                'film_title': 'Đừng Gọi Anh Là Bố - My God! Father',
                'film_label': 'C16',
                'film_image': 'f5.png',
                'film_info': '104 phút - TIX 5.2 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            },
            {
                'film_title': 'Liên Quân Siêu Thú - Stardog and Turbocat',
                'film_label': 'P',
                'film_image': 'f8.png',
                'film_info': '90 phút - TIX 5.5 - IMDb 0',
                'film_time': ['12:45 ~ 14:25']
            },
            {
                'film_title': 'Phù Thủy, Phù Thủy - The Witches',
                'film_label': 'P',
                'film_image': 'f4.png',
                'film_info': '106 phút - TIX 8.2 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            }
        ]
    },
    {
        'id': '9',
        'label': 'DCine',
        'cinema': 'Bến Thành',
        'image': 'ss9.png',
        'address': '6 Mạc Đĩnh Chi, Bến Nghé, Quận 1, Hồ Chí Minh',
        'details': [
            {
                'film_title': 'Kỳ Nghỉ Nhớ Đời - Golden Holiday',
                'film_label': 'C16',
                'film_image': 'f3.png',
                'film_info': '106 phút - TIX 6.1 - IMDb 0',
                'film_time': ['12:45 ~ 14:25']
            },
            {
                'film_title': 'Liên Quân Siêu Thú - Stardog and Turbocat',
                'film_label': 'P',
                'film_image': 'f8.png',
                'film_info': '90 phút - TIX 5.5 - IMDb 0',
                'film_time': ['12:45 ~ 14:25']
            },
            {
                'film_title': 'Phù Thủy, Phù Thủy - The Witches',
                'film_label': 'P',
                'film_image': 'f4.png',
                'film_info': '106 phút - TIX 8.2 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            },
            {
                'film_title': 'Tiệc Trăng Máu - Blood Moon Party',
                'film_label': 'C18',
                'film_image': 'f1.png',
                'film_info': '100 phút - TIX 9.3 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00', '17:40 ~ 19:20', '20:00 ~ 21:40', '21:40 ~ 23:20']
            },
            {
                'film_title': 'Sài Gòn Trong Cơn Mưa - Saigon In The Rain',
                'film_label': 'C16',
                'film_image': 'f2.png',
                'film_info': '105 phút - TIX 8.7 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00', '17:40 ~ 19:20']
            },
            {
                'film_title': 'Kiếm Khách - The Swordsman',
                'film_label': 'C18',
                'film_image': 'f6.png',
                'film_info': '100 phút - TIX 8.7 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            },
            {
                'film_title': 'Đừng Gọi Anh Là Bố - My God! Father',
                'film_label': 'C16',
                'film_image': 'f5.png',
                'film_info': '104 phút - TIX 5.2 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            }
        ]
    },
    {
        'id': '10',
        'label': 'Lotte',
        'cinema': 'Phú Thọ',
        'image': 'ss10.jpg',
        'address': 'L4-Lotte Mart Phú Thọ, Q.11',
        'details': [
            {
                'film_title': 'Liên Quân Siêu Thú - Stardog and Turbocat',
                'film_label': 'P',
                'film_image': 'f8.png',
                'film_info': '90 phút - TIX 5.5 - IMDb 0',
                'film_time': ['12:45 ~ 14:25']
            },
            {
                'film_title': 'Phù Thủy, Phù Thủy - The Witches',
                'film_label': 'P',
                'film_image': 'f4.png',
                'film_info': '106 phút - TIX 8.2 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            },
            {
                'film_title': 'Tiệc Trăng Máu - Blood Moon Party',
                'film_label': 'C18',
                'film_image': 'f1.png',
                'film_info': '100 phút - TIX 9.3 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00', '17:40 ~ 19:20', '20:00 ~ 21:40', '21:40 ~ 23:20']
            }
        ]
    },
    {
        'id': '11',
        'label': 'Lotte',
        'cinema': 'Nam Sài Gòn',
        'image': 'ss11.jpg',
        'address': 'L3-Lotte Mart NSG, 469 Nguyễn Hữu Thọ, Q.7',
        'details': [
            {
                'film_title': 'Kiếm Khách - The Swordsman',
                'film_label': 'C18',
                'film_image': 'f6.png',
                'film_info': '100 phút - TIX 8.7 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            },
            {
                'film_title': 'Phù Thủy, Phù Thủy - The Witches',
                'film_label': 'P',
                'film_image': 'f4.png',
                'film_info': '106 phút - TIX 8.2 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            },
            {
                'film_title': 'Liên Quân Siêu Thú - Stardog and Turbocat',
                'film_label': 'P',
                'film_image': 'f8.png',
                'film_info': '90 phút - TIX 5.5 - IMDb 0',
                'film_time': ['12:45 ~ 14:25']
            },
            {
                'film_title': 'Tiệc Trăng Máu - Blood Moon Party',
                'film_label': 'C18',
                'film_image': 'f1.png',
                'film_info': '100 phút - TIX 9.3 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00', '17:40 ~ 19:20', '20:00 ~ 21:40', '21:40 ~ 23:20']
            },
            {
                'film_title': 'Sài Gòn Trong Cơn Mưa - Saigon In The Rain',
                'film_label': 'C16',
                'film_image': 'f2.png',
                'film_info': '105 phút - TIX 8.7 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00', '17:40 ~ 19:20']
            },
            {
                'film_title': 'Kỳ Nghỉ Nhớ Đời - Golden Holiday',
                'film_label': 'C16',
                'film_image': 'f3.png',
                'film_info': '106 phút - TIX 6.1 - IMDb 0',
                'film_time': ['12:45 ~ 14:25']
            },
            {
                'film_title': 'Phù Thủy, Phù Thủy - The Witches',
                'film_label': 'P',
                'film_image': 'f4.png',
                'film_info': '106 phút - TIX 8.2 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            },
            {
                'film_title': 'Đừng Gọi Anh Là Bố - My God! Father',
                'film_label': 'C16',
                'film_image': 'f5.png',
                'film_info': '104 phút - TIX 5.2 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            }
        ]
    },
    {
        'id': '12',
        'label': 'Lotte',
        'cinema': 'Gò Vấp',
        'image': 'ss12.jpg',
        'address': 'L3-Lotte Mart, 242 Nguyễn Văn Lượng, Gò Vấp',
        'details': [
            {
                'film_title': 'Liên Quân Siêu Thú - Stardog and Turbocat',
                'film_label': 'P',
                'film_image': 'f8.png',
                'film_info': '90 phút - TIX 5.5 - IMDb 0',
                'film_time': ['12:45 ~ 14:25']
            },
            {
                'film_title': 'Tiệc Trăng Máu - Blood Moon Party',
                'film_label': 'C18',
                'film_image': 'f1.png',
                'film_info': '100 phút - TIX 9.3 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00', '17:40 ~ 19:20', '20:00 ~ 21:40', '21:40 ~ 23:20']
            },
            {
                'film_title': 'Kiếm Khách - The Swordsman',
                'film_label': 'C18',
                'film_image': 'f6.png',
                'film_info': '100 phút - TIX 8.7 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            },
            {
                'film_title': 'Phù Thủy, Phù Thủy - The Witches',
                'film_label': 'P',
                'film_image': 'f4.png',
                'film_info': '106 phút - TIX 8.2 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            },
            {
                'film_title': 'Sài Gòn Trong Cơn Mưa - Saigon In The Rain',
                'film_label': 'C16',
                'film_image': 'f2.png',
                'film_info': '105 phút - TIX 8.7 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00', '17:40 ~ 19:20']
            },
            {
                'film_title': 'Kỳ Nghỉ Nhớ Đời - Golden Holiday',
                'film_label': 'C16',
                'film_image': 'f3.png',
                'film_info': '106 phút - TIX 6.1 - IMDb 0',
                'film_time': ['12:45 ~ 14:25']
            },
            {
                'film_title': 'Phù Thủy, Phù Thủy - The Witches',
                'film_label': 'P',
                'film_image': 'f4.png',
                'film_info': '106 phút - TIX 8.2 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            },
            {
                'film_title': 'Đừng Gọi Anh Là Bố - My God! Father',
                'film_label': 'C16',
                'film_image': 'f5.png',
                'film_info': '104 phút - TIX 5.2 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            }
        ]
    },
    {
        'id': '13',
        'label': 'Lotte',
        'cinema': 'Thủ Đức',
        'image': 'ss13.jpg',
        'address': 'L2-Joy Citipoint, KCX Linh Trung, Thủ Đức',
        'details': [
            {
                'film_title': 'Liên Quân Siêu Thú - Stardog and Turbocat',
                'film_label': 'P',
                'film_image': 'f8.png',
                'film_info': '90 phút - TIX 5.5 - IMDb 0',
                'film_time': ['12:45 ~ 14:25']
            },
            {
                'film_title': 'Sài Gòn Trong Cơn Mưa - Saigon In The Rain',
                'film_label': 'C16',
                'film_image': 'f2.png',
                'film_info': '105 phút - TIX 8.7 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00', '17:40 ~ 19:20']
            },
            {
                'film_title': 'Kỳ Nghỉ Nhớ Đời - Golden Holiday',
                'film_label': 'C16',
                'film_image': 'f3.png',
                'film_info': '106 phút - TIX 6.1 - IMDb 0',
                'film_time': ['12:45 ~ 14:25']
            },
            {
                'film_title': 'Phù Thủy, Phù Thủy - The Witches',
                'film_label': 'P',
                'film_image': 'f4.png',
                'film_info': '106 phút - TIX 8.2 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            },
            {
                'film_title': 'Tiệc Trăng Máu - Blood Moon Party',
                'film_label': 'C18',
                'film_image': 'f1.png',
                'film_info': '100 phút - TIX 9.3 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00', '17:40 ~ 19:20', '20:00 ~ 21:40', '21:40 ~ 23:20']
            },
            {
                'film_title': 'Kiếm Khách - The Swordsman',
                'film_label': 'C18',
                'film_image': 'f6.png',
                'film_info': '100 phút - TIX 8.7 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            },
            {
                'film_title': 'Phù Thủy, Phù Thủy - The Witches',
                'film_label': 'P',
                'film_image': 'f4.png',
                'film_info': '106 phút - TIX 8.2 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            }
        ]
    },
    {
        'id': '14',
        'label': 'Lotte',
        'cinema': 'Cộng Hòa',
        'image': 'ss14.jpg',
        'address': 'L4-Pico Plaza, 20 Cộng Hòa, Tân Bình',
        'details': [
            {
                'film_title': 'Kỳ Nghỉ Nhớ Đời - Golden Holiday',
                'film_label': 'C16',
                'film_image': 'f3.png',
                'film_info': '106 phút - TIX 6.1 - IMDb 0',
                'film_time': ['12:45 ~ 14:25']
            },
            {
                'film_title': 'Phù Thủy, Phù Thủy - The Witches',
                'film_label': 'P',
                'film_image': 'f4.png',
                'film_info': '106 phút - TIX 8.2 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00']
            },
            {
                'film_title': 'Tiệc Trăng Máu - Blood Moon Party',
                'film_label': 'C18',
                'film_image': 'f1.png',
                'film_info': '100 phút - TIX 9.3 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00', '17:40 ~ 19:20', '20:00 ~ 21:40', '21:40 ~ 23:20']
            },
            {
                'film_title': 'Liên Quân Siêu Thú - Stardog and Turbocat',
                'film_label': 'P',
                'film_image': 'f8.png',
                'film_info': '90 phút - TIX 5.5 - IMDb 0',
                'film_time': ['12:45 ~ 14:25']
            },
            {
                'film_title': 'Sài Gòn Trong Cơn Mưa - Saigon In The Rain',
                'film_label': 'C16',
                'film_image': 'f2.png',
                'film_info': '105 phút - TIX 8.7 - IMDb 0',
                'film_time': ['12:45 ~ 14:25', '15:20 ~ 17:00', '17:40 ~ 19:20']
            }
        ]
    },

]
let color = ['BHD Star', 'CNS', 'DDC', 'MegaGS', 'DCine', 'Lotte'];
let booking = [
    [
        'Tiệc Trăng Máu - Blood Moon Party (C18)',
        'Phù Thủy, Phù Thủy - The Witches (P)',
        'Bí Mật Của Gió - Secrets of the Wind (C16)',
        'Chồng Người Ta (C18)',
        'Trái Tim Quái Vật (C18)',
        'Sài Gòn Trong Cơn Mưa - Saigon In The Rain (C16)',
        'Trốn Chạy - Run (C18)',
        'Đấu Sĩ Tối Thượng - Jiu Jitsu (C18)',
        'Fate/Stay Night III: Heaven Feel',
        'Đừng Gọi Anh Là Bố - My God! Father (C16)',
        'Kiếm Khách - The Swordsman (C18)',
        'Hào Quang Đánh Cắp - Diva (C16)',
        'Thanh Âm Trong Mắt Em - Your Eyes Tell (C16)',
        'Ranh Giới Quỷ - The Other Side (C18)',
        'Liên Quân Siêu Thú - Stardog and Turbocat (P)',
        'Những Kẻ Vô Cảm - Dont Look Back (C18)',
        'Ngạ Quỷ: Tiếng Thét Đồng Gió Hú - The Ghoul: Horror At The Howling Field (C18)',
        'Thang Máy (C18)',
        'Tháp Lửa - The Tower (P)',
        'Kỳ Nghỉ Nhớ Đời - Golden Holiday (C16)'
    ],
    [
        'BHD Star Bitexco',
        'BHD Star Vincom 3/2',
        'BHD Star Vincom Lê Văn Việt',
        'BHD Star Vincom Quang Trung',
        'BHD Star Vincom Thảo Điền',
        'BHD Star &lrm;Phạm Hùng',
        'CineStar Hai Bà Trưng',
        'CineStar Quốc Thanh',
        'DCINE Bến Thành',
        'DDC - Đống Đa',
        'Lotte Cinema Cantavil',
        'Lotte Cinema Cộng Hòa',
        'Lotte Cinema Gò Vấp',
        'Lotte Cinema Nam Sài Gòn',
        'Lotte Cinema Phú Thọ',
        'Lotte Cinema Thủ Đức'
    ],
    [
        ['Hôm nay<br/>2020-11-21'],
        ['Ngày mai<br/>2020-11-22'],
        ['Thứ hai<br/>2020-11-23'],
        ['Thứ ba<br/>2020-11-24'],
        ['Thứ tư<br/>2020-11-25'],
        ['Thứ năm<br/>2020-11-26'],
        ['Thứ sáu<br/>2020-11-27']
    ],
    [
        '19:45',
        '20:50',
        '22:00',
        '23:00'
    ]
];
let loadMenu = (data, cname) => {
    let phim = data.reduce((phim, item) => {
        return phim += `<li><a onclick="selectPhim(this, '${cname}')">${item}</a></li>`;
    }, '');
    document.querySelector('#v' + cname).innerHTML = phim;
}

let selectPhim = (event, cname) => {
    let classNext = '';
    if (cname == 'Phim') {
        classNext = 'Rap';
        loadMenu(booking[1], 'Rap');
    }
    else if (cname == 'Rap') {
        classNext = 'Ngay';
        loadMenu(booking[2], 'Ngay');
    }
    else if (cname == 'Ngay') {
        classNext = 'Chieu';
        loadMenu(booking[3], 'Chieu');
    }
    else
        classNext = 'Done';
    
    document.querySelector('#btn' + cname).innerHTML = event.text;
    document.querySelector('#v' + cname).className = "booking__dropdown";
    if(classNext != 'Done') {
        setTimeout(() => {
            document.querySelector('#v' + classNext).className = "booking__dropdown booking__show";
        }, 50)
    }
}

loadMenu(booking[0], 'Phim');

// SU KIEN SHOW KHI SELECT MENU
document.querySelector('#btnPhim').onclick = () => {
    document.querySelector('#vPhim').className = "booking__dropdown booking__show";
}
document.querySelector('#btnRap').onclick = () => {
    document.querySelector('#vRap').className = "booking__dropdown booking__show";
}
document.querySelector('#btnNgay').onclick = () => {
    document.querySelector('#vNgay').className = "booking__dropdown booking__show";
}
document.querySelector('#btnChieu').onclick = () => {
    document.querySelector('#vChieu').className = "booking__dropdown booking__show";
}

$("body").click((e) => {
    if (!$(e.target).closest('#btnPhim').length) {
        document.querySelector('#vPhim').className = "booking__dropdown";
    }
    if (!$(e.target).closest('#btnRap').length) {
        document.querySelector('#vRap').className = "booking__dropdown";
    }
    if (!$(e.target).closest('#btnNgay').length) {
        document.querySelector('#vNgay').className = "booking__dropdown";
    }
    if (!$(e.target).closest('#btnChieu').length) {
        document.querySelector('#vChieu').className = "booking__dropdown";
    }
});

function handleOpacity(index) {
    for(let i = 0; i < color.length; i++) {
        document.querySelector('#lb' + i).style.opacity = 0.5;
    }
    document.querySelector('#lb' + index).style.opacity = 1;
}

renderCinema();

function renderCinema(label = 'BHD Star') {

    // HANDLE OPACITY LABEL
    let iOpacity = color.findIndex(item => item === label);
    handleOpacity(iOpacity);

    let data = '';
    let id = dataMovies.findIndex(m => m.label === label);
    let iColor = color.findIndex(cl => cl === label) + 1;
    for (const item of dataMovies) {
        if (item.label === label) {
            data += `
                <div class="stickets__center__item" onclick="renderFilm('${item.id - 1}', ${iOpacity})" id="f${item.id - 1}">
                    <img src="./img/${item.image}" />
                    <div class="stickets__center__label">
                        <p class="label__title"><span class="sticket${iColor}">${item.label}</span> - ${item.cinema}</p>
                        <p class="label__address">${item.address}</p>
                        <p><a href="#">[chi tiết]</a></p>
                    </div>
                </div>
            `;
        }
    }
    
    document.querySelector('.stickets__center').innerHTML = data;
    renderFilm(id, iOpacity);
}

function showHidenTime(sid) {
    let timeSelect = document.querySelector('#' + sid).style.height = 0;
}

function handleOpacityCinema(index, value) {    

    let lbPhim = [
        [0,1,2,3],
        [4,5],
        [6],
        [7],
        [8],
        [9,10,11,12,13]
    ];

    let i2 = lbPhim[index].findIndex(item => item == Number(value));
    
    
    for(let i = 0; i < lbPhim[index].length; i++) {
        document.querySelector('#f' + lbPhim[index][i]).style.opacity = 0.5;
    }
    document.querySelector('#f' + lbPhim[index][i2]).style.opacity = 1;
}

function renderFilm(id = 0, indexLabel) {
    let dataFilm = dataMovies[id].details;

    let data = dataFilm.reduce((data, item, index) => {

        let time = item.film_time.reduce((t, timeFilm, index) => {
            cutTime = timeFilm.split(" ~ ");
            t += `
                <a href="#" class="stickets__time__item">
                    <span>${cutTime[0]}</span> ~ ${cutTime[1]}
                </a>
            `;
            return t;
        }, '');

        data += `
            <div class="stickets__right__item">
                <div class="stickets__right__info">
                    <a data-toggle="collapse" href="#s${id + "" + index}">
                        <img src="./img/${item.film_image}" />
                        <div class="stickets__right__label">
                            <p class="label__title"><span ${item.film_label === 'P' ? "class='spanGreen'" : ''}>${item.film_label}</span> ${item.film_title}</p>
                            <p class="label__address">${item.film_info}</p>
                        </div>
                    </a>
                </div>
                <div class="stickets__right__time collapse show" id="s${id + "" + index}">
                    <h3>2D Digital</h3>
                    ${time}
                </div>
            </div>
        `;

        return data;
    }, '')
    handleOpacityCinema(indexLabel, id);
    document.querySelector('.stickets__right').innerHTML = data;
}