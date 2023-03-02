﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using backend.Data;

#nullable disable

namespace backend.Data.Migrations
{
    [DbContext(typeof(RemotivateContext))]
    [Migration("20230228133724_Init")]
    partial class Init
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("ProjectUser", b =>
                {
                    b.Property<long>("CurrentProjectsId")
                        .HasColumnType("bigint");

                    b.Property<long>("UsersInTheProjectId")
                        .HasColumnType("bigint");

                    b.HasKey("CurrentProjectsId", "UsersInTheProjectId");

                    b.HasIndex("UsersInTheProjectId");

                    b.ToTable("ProjectUser");
                });

            modelBuilder.Entity("TaskItemUser", b =>
                {
                    b.Property<long>("TasksId")
                        .HasColumnType("bigint");

                    b.Property<long>("UsersOnTaskId")
                        .HasColumnType("bigint");

                    b.HasKey("TasksId", "UsersOnTaskId");

                    b.HasIndex("UsersOnTaskId");

                    b.ToTable("TaskItemUser");
                });

            modelBuilder.Entity("backend.Models.Entities.Date", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"));

                    b.Property<DateTime>("CompletedOn")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DeadLine")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("LatestModification")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("Dates");
                });

            modelBuilder.Entity("backend.Models.Entities.Project", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"));

                    b.Property<long>("DateId")
                        .HasColumnType("bigint");

                    b.Property<long>("ManagerId")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.ToTable("Projects");
                });

            modelBuilder.Entity("backend.Models.Entities.TaskItem", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"));

                    b.Property<long>("DateId")
                        .HasColumnType("bigint");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("ProjectId")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("ProjectId");

                    b.ToTable("Tasks");
                });

            modelBuilder.Entity("backend.Models.Entities.User", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"));

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("ProjectUser", b =>
                {
                    b.HasOne("backend.Models.Entities.Project", null)
                        .WithMany()
                        .HasForeignKey("CurrentProjectsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("backend.Models.Entities.User", null)
                        .WithMany()
                        .HasForeignKey("UsersInTheProjectId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("TaskItemUser", b =>
                {
                    b.HasOne("backend.Models.Entities.TaskItem", null)
                        .WithMany()
                        .HasForeignKey("TasksId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("backend.Models.Entities.User", null)
                        .WithMany()
                        .HasForeignKey("UsersOnTaskId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("backend.Models.Entities.TaskItem", b =>
                {
                    b.HasOne("backend.Models.Entities.Project", null)
                        .WithMany("Tasks")
                        .HasForeignKey("ProjectId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("backend.Models.Entities.Project", b =>
                {
                    b.Navigation("Tasks");
                });
#pragma warning restore 612, 618
        }
    }
}
